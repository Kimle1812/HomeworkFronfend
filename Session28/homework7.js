let students = [
    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature : 7 } },
    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature : 5 } },
    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature : 9 } }
];

filterStudent(students);

function filterStudent(students) {
    if (Array.isArray(students)) {
        let name = [];
        for (let i = 0; i < students.length; i++) {
            let average = (students[i].scores.math + students[i].scores.english + students[i].scores.literature) / 3;
            if (average >= 8) {
                name.push(students[i].name);
            }
        }
        console.log(`Sinh viên có điểm trung bình trên 8 là: `);
        console.log(name);
    } else {
        console.log("Dữ liệu không hợp lệ");
    }
}
