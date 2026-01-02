/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import Papa from 'papaparse';

const prisma = new PrismaClient();

async function main() {
    console.log("🚀 Bắt đầu...");

    const filePath = './khuyen_mai_150000_topgia.csv';

    // Check file trước cho chắc
    if (!fs.existsSync(filePath)) {
        console.error(`❌ Lỗi to đùng: Không thấy file ${filePath} đâu cả!`);
        return;
    }

    const csvFile = fs.readFileSync(filePath, 'utf8');

    // QUAN TRỌNG: Gói vào Promise để bắt buộc Node.js phải chờ
    await new Promise<void>((resolve, reject) => {
        Papa.parse(csvFile, {
            header: true,
            skipEmptyLines: true,
            complete: async (results: any) => {
                try {
                    const totalRows = results.data.length;
                    console.log(`📄 Đọc xong CSV. Tổng: ${totalRows} dòng.`);

                    const dataToInsert = results.data
                        .map((item: any) => {
                            const rawCode = item.code || item.Code || item.CODE;
                            if (!rawCode) return null;
                            return {
                                code: rawCode.trim(),
                                brand: "TOPGIA", // Sửa brand theo ý bạn
                                isUsed: false,
                            };
                        })
                        .filter((item: any) => item !== null);

                    console.log(`🔍 Tìm thấy ${dataToInsert.length} mã hợp lệ.`);

                    // CHIA GÓI (CHUNK)
                    const BATCH_SIZE = 1000;
                    let totalInserted = 0;

                    for (let i = 0; i < dataToInsert.length; i += BATCH_SIZE) {
                        const chunk = dataToInsert.slice(i, i + BATCH_SIZE);

                        const result = await prisma.rewardCode.createMany({
                            data: chunk,
                            skipDuplicates: true // Postgres only
                        });

                        totalInserted += result.count;
                        console.log(`   ✅ Gói ${i}: Đã nạp +${result.count} mã.`);
                    }

                    console.log(`🎉 Xong! Tổng cộng: ${totalInserted} mã.`);
                    resolve(); // Báo hiệu đã xong việc
                } catch (error) {
                    console.error("❌ Lỗi trong lúc insert:", error);
                    reject(error); // Báo lỗi
                }
            },
            error: (err: any) => {
                reject(err);
            }
        });
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });