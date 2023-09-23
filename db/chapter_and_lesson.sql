INSERT INTO CHAPTERS
VALUES (
        'd1e8f643-8406-4a8d-97e2-b87a95941d7a',
        'Lời mở đầu',
        'Giới thiệu về nội dung quá trình học và ngôn ngữ sử dụng',
        0,
        NOW(),
        NOW()
    ),
    (
        '3b15cdba-e80c-481c-9ef0-97a69ea12d18',
        'Tính toán và biến trong lập trình',
        'Giới thiệu về nội dung quá trình học',
        1,
        NOW(),
        NOW()
    ),
    (
        '' 5784bad9-f9b0-47fd-80ea-ad97a6510267 '',
        'Chuỗi, mảng, tuble và map',
        'Chuỗi, mảng, tuble và map là những kiểu dữ liệu cơ bản trong Python.',
        2,
        NOW(),
        NOW()
    ),
    (
        'aaf9ac8d-da9a-4f26-8534-881d60cfe055',
        'Đặt câu hỏi với if và else',
        'Câu lệnh if else trong python là một cấu trúc điều khiển cho phép thực hiện một lệnh hoặc một nhóm lệnh dựa trên giá trị của một biểu thức luận lý. Nó có thể được sử dụng để kiểm tra các điều kiện và chọn một hành động hoặc một hành động khác tùy theo kết quả của biểu thức.',
        3,
        NOW(),
        NOW()
    ),
    (
        '7f6c9300-b518-4507-8fda-36c3598cedfd',
        'Cùng đi lòng vòng với vòng lặp',
        'Vòng lặp trong là một cách để thực hiện một hành động nhiều lần với những điều kiện khác nhau. Có hai loại vòng lặp chính trong Python là vòng lặp for và vòng lặp while. Em có thể hình dung vòng lặp như một chiếc đồng hồ báo thức, em có thể đặt nó để báo thức vào một thời gian cụ thể hoặc sau một khoảng thời gian nhất định.',
        4,
        NOW(),
        NOW()
    ),
    (
        '9fc29479-bb6e-4ba7-8d5e-1a11f8574a1e',
        "Tái sử dụng code với hàm và module",
        "Hàm và module là hai khái niệm quan trọng trong python. Hàm là một đoạn mã có tên, nhận vào một số tham số và trả về một giá trị. Module là một tập hợp các hàm, biến và lớp liên quan được đặt trong một tệp python. Module giúp chia nhỏ chương trình thành các phần nhỏ hơn, dễ quản lý và tái sử dụng. ",
        5,
        NOW(),
        NOW()
    );
----------------------------------------- Lesson chapter 0-----------------------------------------
INSERT INTO LESSONS (
        ID,
        CHAPTER_ID,
        NAME,
        TYPE,
        LEVEL,
        SCORE,
        CREATED_AT,
        UPDATED_AT
    )
VALUES (
        'b8c9feba-3722-4fde-b0d8-6e5adc2d6545',
        'd1e8f643-8406-4a8d-97e2-b87a95941d7a' 'Học lập trình để làm gì?',
        'lecture',
        0,
        10,
        NOW(),
        NOW()
    ),
    (
        '6e7a9966-d3b8-4df0-a6ce-058de8368033',
        'd1e8f643-8406-4a8d-97e2-b87a95941d7a' 'Học lập trình như thế nào?',
        'lecture',
        1,
        10,
        NOW(),
        NOW()
    ),
    (
        'abbd8126-da11-4334-a265-c0752d897b7d',
        'd1e8f643-8406-4a8d-97e2-b87a95941d7a' 'Chúng mình dành cho ai?',
        'lecture',
        2,
        10,
        NOW(),
        NOW()
    ),
    (
        '6273d2fa-a2bc-4ef9-9e69-abc2e75242c1',
        'd1e8f643-8406-4a8d-97e2-b87a95941d7a' 'Cảm nghĩ về ngôn ngữ!',
        'lecture',
        3,
        10,
        NOW(),
        NOW()
    ) ----------------------------------------- Lesson chapter 1-----------------------------------------
INSERT INTO LESSONS (
        ID,
        CHAPTER_ID,
        NAME,
        TYPE,
        LEVEL,
        SCORE,
        CREATED_AT,
        UPDATED_AT
    )
VALUES (
        UUID_GENERATE_V4(),
        '3b15cdba-e80c-481c-9ef0-97a69ea12d18',
        'Làm toán với Python?',
        'lecture',
        0,
        10,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        '3b15cdba-e80c-481c-9ef0-97a69ea12d18',
        'Các toán tử trong Python',
        'lecture',
        1,
        10,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        '3b15cdba-e80c-481c-9ef0-97a69ea12d18',
        'Luyện tập toán tử nhé!',
        'practice',
        2,
        10,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        '3b15cdba-e80c-481c-9ef0-97a69ea12d18',
        'Thứ tự tính toán?',
        'lecture',
        3,
        10,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        '3b15cdba-e80c-481c-9ef0-97a69ea12d18',
        'Biến chỉ là một mảnh giấy ghi chú!',
        'lecture',
        4,
        10,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        '3b15cdba-e80c-481c-9ef0-97a69ea12d18',
        'Sử dụng biến!',
        'lecture',
        5,
        10,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        '3b15cdba-e80c-481c-9ef0-97a69ea12d18',
        'Cùng ôn lại về biến nhé!',
        'practice',
        6,
        10,
        NOW(),
        NOW()
    ) ----------------------------------------- Lesson chapter 2-----------------------------------------
INSERT INTO LESSONS (
        ID,
        CHAPTER_ID,
        NAME,
        TYPE,
        LEVEL,
        SCORE,
        CREATED_AT,
        UPDATED_AT
    )
VALUES (
        UUID_GENERATE_V4(),
        '5784bad9-f9b0-47fd-80ea-ad97a6510267',
        'Khởi tạo chuỗi',
        'lecture',
        0,
        10,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        '5784bad9-f9b0-47fd-80ea-ad97a6510267',
        'Các vấn đề thường gặp với chuỗi',
        'lecture',
        1,
        10,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        '5784bad9-f9b0-47fd-80ea-ad97a6510267',
        'Ghép giá trị trong chuỗi!',
        'lecture',
        2,
        10,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        '5784bad9-f9b0-47fd-80ea-ad97a6510267',
        'Bạn đã hiểu rõ về chuỗi chưa!',
        'practice',
        3,
        10,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        '5784bad9-f9b0-47fd-80ea-ad97a6510267',
        'Theo sau chuỗi là mảng!',
        'lecture',
        4,
        10,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        '5784bad9-f9b0-47fd-80ea-ad97a6510267',
        'Thêm và xóa phần tử trong mảng!',
        'lecture',
        5,
        10,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        '5784bad9-f9b0-47fd-80ea-ad97a6510267',
        'Các phép toán với mảng!',
        'lecture',
        6,
        10,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        '5784bad9-f9b0-47fd-80ea-ad97a6510267',
        'Kiểm tra kiến thức về mảng nhé!',
        'practice',
        7,
        10,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        '5784bad9-f9b0-47fd-80ea-ad97a6510267',
        'Tuble cũng chỉ là mảng!',
        'lecture',
        8,
        10,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        '5784bad9-f9b0-47fd-80ea-ad97a6510267',
        'Python maps không phải bản đồ cho em đâu!',
        'lecture',
        9,
        10,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        '5784bad9-f9b0-47fd-80ea-ad97a6510267',
        'Cùng ôn lại các kiểu dữ liệu nào!',
        'practice',
        10,
        10,
        NOW(),
        NOW()
    ),
    ----------------------------------------- Lesson chapter 3-----------------------------------------
INSERT INTO LESSONS (
        ID,
        CHAPTER_ID,
        NAME,
        TYPE,
        LEVEL,
        SCORE,
        CREATED_AT,
        UPDATED_AT
    )
VALUES (
        UUID_GENERATE_V4(),
        'aaf9ac8d-da9a-4f26-8534-881d60cfe055',
        'Lệnh IF',
        'lecture',
        0,
        10,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        'aaf9ac8d-da9a-4f26-8534-881d60cfe055',
        'Khối lệnh là một khối các lệnh ^^',
        'lecture',
        1,
        10,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        'aaf9ac8d-da9a-4f26-8534-881d60cfe055',
        'Điều kiện là để so sánh hai thứ với nhau',
        'lecture',
        2,
        10,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        'aaf9ac8d-da9a-4f26-8534-881d60cfe055',
        'Cùng học về lệnh IF-THEN-ELSE',
        'lecture',
        3,
        10,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        'aaf9ac8d-da9a-4f26-8534-881d60cfe055',
        'Vậy còn IF-ELIF?',
        'lecture',
        4,
        10,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        'aaf9ac8d-da9a-4f26-8534-881d60cfe055',
        'Cùng kết hợp nhiều điều kiện nào!',
        'lecture',
        5,
        10,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        'aaf9ac8d-da9a-4f26-8534-881d60cfe055',
        'Biến không có giá trị-NONE',
        'lecture',
        6,
        10,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        'aaf9ac8d-da9a-4f26-8534-881d60cfe055',
        'Khác biệt giữa chuỗi và số!',
        'lecture',
        7,
        10,
        NOW(),
        NOW()
    ) ----------------------------------------- Lesson chapter 4-----------------------------------------
INSERT INTO LESSONS (
        ID,
        CHAPTER_ID,
        NAME,
        TYPE,
        LEVEL,
        SCORE,
        CREATED_AT,
        UPDATED_AT
    )
VALUES (
        UUID_GENERATE_V4(),
        '7f6c9300-b518-4507-8fda-36c3598cedfd',
        'Vòng lặp FOR',
        'lecture',
        0,
        10,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        '7f6c9300-b518-4507-8fda-36c3598cedfd',
        'Xem ví dụ nhé!',
        'lecture',
        1,
        10,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        '7f6c9300-b518-4507-8fda-36c3598cedfd',
        'Ví dụ khó hơn thì sao?',
        'lecture',
        2,
        10,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        '7f6c9300-b518-4507-8fda-36c3598cedfd',
        'Giải thích kĩ hơn nhé!',
        'lecture',
        3,
        10,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        '7f6c9300-b518-4507-8fda-36c3598cedfd',
        'Cùng ôn lại nào!',
        'practice',
        4,
        10,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        '7f6c9300-b518-4507-8fda-36c3598cedfd',
        'Ngoài ra còn có WHILE nữa',
        'lecture',
        5,
        10,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        '7f6c9300-b518-4507-8fda-36c3598cedfd',
        'Thử sức với vòng lặp',
        'practice',
        6,
        10,
        NOW(),
        NOW()
    ) ----------------------------------------- Lesson chapter 5 -----------------------------------------
INSERT INTO LESSONS (
        ID,
        CHAPTER_ID,
        NAME,
        TYPE,
        LEVEL,
        SCORE,
        CREATED_AT,
        UPDATED_AT
    )
VALUES (
        UUID_GENERATE_V4(),
        '9fc29479-bb6e-4ba7-8d5e-1a11f8574a1e',
        'Dùng hàm',
        'lecture',
        0,
        10,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        '9fc29479-bb6e-4ba7-8d5e-1a11f8574a1e',
        'Các thành phần trong một hàm',
        'lecture',
        1,
        10,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        '9fc29479-bb6e-4ba7-8d5e-1a11f8574a1e',
        'Biến và phạm vi',
        'lecture',
        2,
        10,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        '9fc29479-bb6e-4ba7-8d5e-1a11f8574a1e',
        'Cùng ôn lại nào!',
        'practice',
        3,
        10,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        '9fc29479-bb6e-4ba7-8d5e-1a11f8574a1e',
        'Dùng Module',
        'lecture',
        4,
        10,
        NOW(),
        NOW()
    ),
    (
        UUID_GENERATE_V4(),
        '9fc29479-bb6e-4ba7-8d5e-1a11f8574a1e',
        'Kiểm tra kiến thức nhé',
        'practice',
        5,
        10,
        NOW(),
        NOW()
    )