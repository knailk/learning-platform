INSERT INTO
    CHAPTERS
VALUES
    (
        UUID_GENERATE_V4(),
        'Lời mở đầu',
        'Giới thiệu về nội dung quá trình học và ngôn ngữ sử dụng',
        0,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        'Tính toán và biến trong lập trình',
        'Giới thiệu về nội dung quá trình học',
        1,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        'Chuỗi, mảng, tuble và map',
        'Chuỗi, mảng, tuble và map là những kiểu dữ liệu cơ bản trong Python.',
        2,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        'Vẽ vời cùng với rùa',
        'Module turtle trong python là một module cung cấp một bề mặt ảo để vẽ hình ảnh và hình dạng với một cây bút gọi là con rùa. Nó là một phần của ngôn ngữ lập trình LOGO ban đầu và được phổ biến để giới thiệu lập trình cho trẻ em.',
        3,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        'Đặt câu hỏi với if và else',
        'Câu lệnh if else trong python là một cấu trúc điều khiển cho phép thực hiện một lệnh hoặc một nhóm lệnh dựa trên giá trị của một biểu thức luận lý. Nó có thể được sử dụng để kiểm tra các điều kiện và chọn một hành động hoặc một hành động khác tùy theo kết quả của biểu thức.',
        4,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        'Cùng đi lòng vòng với vòng lặp',
        'Câu lệnh if else trong python là một cấu trúc điều khiển cho phép thực hiện một lệnh hoặc một nhóm lệnh dựa trên giá trị của một biểu thức luận lý. Nó có thể được sử dụng để kiểm tra các điều kiện và chọn một hành động hoặc một hành động khác tùy theo kết quả của biểu thức.',
        5,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        'Tái sử dụng code với hàm và module',
        'Hàm và module là hai khái niệm quan trọng trong python. Hàm là một đoạn mã có tên, nhận vào một số tham số và trả về một giá trị. Module là một tập hợp các hàm, biến và lớp liên quan được đặt trong một tệp python. Module giúp chia nhỏ chương trình thành các phần nhỏ hơn, dễ quản lý và tái sử dụng. ',
        6,
        NOW(),
        NOW()
    );

----------------------------------------- Lesson chapter 0-----------------------------------------
WITH CHAPTER0 AS (
    SELECT
        ID
    FROM
        CHAPTERS
    WHERE
        LEVEL = 0
)
INSERT INTO
    LESSONS (
        ID,
        CHAPTER_ID,
        NAME,
        TYPE,
        LEVEL,
        SCORE,
        CREATED_AT,
        UPDATED_AT
    )
SELECT
    UUID_GENERATE_V4(),
    CHAPTER0.ID,
    'Học lập trình để làm gì?',
    'lecture',
    0,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER0
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER0.ID,
    'Học lập trình như thế nào?',
    'lecture',
    1,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER0
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER0.ID,
    'Chúng mình dành cho ai?',
    'lecture',
    2,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER0
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER0.ID,
    'Cảm nghĩ về ngôn ngữ!',
    'lecture',
    3,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER0;

----------------------------------------- Lesson chapter 1-----------------------------------------
WITH CHAPTER1 AS (
    SELECT
        ID
    FROM
        CHAPTERS
    WHERE
        LEVEL = 1
)
INSERT INTO
    LESSONS (
        ID,
        CHAPTER_ID,
        NAME,
        TYPE,
        LEVEL,
        SCORE,
        CREATED_AT,
        UPDATED_AT
    )
SELECT
    UUID_GENERATE_V4(),
    CHAPTER1.ID,
    'Làm toán với Python?',
    'lecture',
    0,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER1
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER1.ID,
    'Các toán tử trong Python',
    'lecture',
    1,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER1
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER1.ID,
    'Luyện tập toán tử nhé!',
    'practice',
    2,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER1
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER1.ID,
    'Thứ tự tính toán?',
    'lecture',
    3,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER1
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER1.ID,
    'Biến chỉ là một mảnh giấy ghi chú!',
    'lecture',
    4,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER1
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER1.ID,
    'Sử dụng biến!',
    'lecture',
    5,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER1
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER1.ID,
    'Cùng ôn lại nào!',
    'practice',
    6,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER1;

----------------------------------------- Lesson chapter 2-----------------------------------------
WITH CHAPTER2 AS (
    SELECT
        ID
    FROM
        CHAPTERS
    WHERE
        LEVEL = 2
)
INSERT INTO
    LESSONS (
        ID,
        CHAPTER_ID,
        NAME,
        TYPE,
        LEVEL,
        SCORE,
        CREATED_AT,
        UPDATED_AT
    )
SELECT
    UUID_GENERATE_V4(),
    CHAPTER2.ID,
    'Khởi tạo chuỗi',
    'lecture',
    0,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER2
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER2.ID,
    'Các vấn đề thường gặp với chuỗi',
    'lecture',
    1,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER2
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER2.ID,
    'Thứ tự tính toán?',
    'lecture',
    2,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER2
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER2.ID,
    'Ghép giá trị trong chuỗi!',
    'lecture',
    3,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER2
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER2.ID,
    'Bạn đã hiểu rõ về chuỗi chưa!',
    'practice',
    4,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER2
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER2.ID,
    'Theo sau chuỗi là mảng!',
    'lecture',
    5,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER2
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER2.ID,
    'Thêm và xóa phần tử trong mảng!',
    'lecture',
    6,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER2
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER2.ID,
    'Các phép toán với mảng!',
    'lecture',
    7,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER2
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER2.ID,
    'Kiểm tra kiến thức về mảng nhé!',
    'practice',
    8,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER2
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER2.ID,
    'Tuble cũng chỉ là mảng!',
    'lecture',
    9,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER2
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER2.ID,
    'Python maps không phải bản đồ cho em đâu!',
    'lecture',
    10,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER2
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER2.ID,
    'Cùng ôn lại nào!',
    'practice',
    11,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER2;

----------------------------------------- Lesson chapter 3-----------------------------------------
WITH CHAPTER3 AS (
    SELECT
        ID
    FROM
        CHAPTERS
    WHERE
        LEVEL = 3
)
INSERT INTO
    LESSONS (
        ID,
        CHAPTER_ID,
        NAME,
        TYPE,
        LEVEL,
        SCORE,
        CREATED_AT,
        UPDATED_AT
    )
SELECT
    UUID_GENERATE_V4(),
    CHAPTER3.ID,
    'Lệnh IF',
    'lecture',
    0,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER3
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER3.ID,
    'Khối lệnh là một khối các lệnh ^^',
    'lecture',
    1,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER3
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER3.ID,
    'Điều kiện là để so sánh hai thứ với nhau',
    'lecture',
    2,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER3
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER3.ID,
    'Cùng học về lệnh IF-THEN-ELSE',
    'lecture',
    3,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER3
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER3.ID,
    'Vậy còn IF-ELIF?',
    'lecture',
    4,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER3
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER3.ID,
    'Cùng kết hợp nhiều điều kiện nào!',
    'lecture',
    5,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER3
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER3.ID,
    'Biến không có giá trị-NONE',
    'lecture',
    6,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER3
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER3.ID,
    'TKhác biệt giữa chuỗi và số!',
    'lecture',
    7,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER3
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER3.ID,
    'Python maps không phải bản đồ cho em đâu!',
    'lecture',
    8,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER3;

----------------------------------------- Lesson chapter 4-----------------------------------------
WITH CHAPTER4 AS (
    SELECT
        ID
    FROM
        CHAPTERS
    WHERE
        LEVEL = 4
)
INSERT INTO
    LESSONS (
        ID,
        CHAPTER_ID,
        NAME,
        TYPE,
        LEVEL,
        SCORE,
        CREATED_AT,
        UPDATED_AT
    )
SELECT
    UUID_GENERATE_V4(),
    CHAPTER4.ID,
    'Example chapter 4!',
    'lecture',
    0,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER4.ID,
    'Example chapter 4!',
    'lecture',
    1,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER4.ID,
    'Example chapter 4!',
    'lecture',
    2,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER4.ID,
    'Example chapter 4!',
    'lecture',
    3,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER4.ID,
    'Example chapter 4!',
    'practice',
    4,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER4.ID,
    'Example chapter 4!',
    'lecture',
    5,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER4.ID,
    'Example chapter 4!',
    'lecture',
    6,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER4.ID,
    'Example chapter 4!',
    'lecture',
    7,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER4.ID,
    'Example chapter 4!',
    'practice',
    8,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER4.ID,
    'Example chapter 4!',
    'lecture',
    9,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER4.ID,
    'Example chapter 4!',
    'lecture',
    10,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    CHAPTER4.ID,
    'Example chapter 4!',
    'practice',
    11,
    10,
    NOW(),
    NOW()
FROM
    CHAPTER4;