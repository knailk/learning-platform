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

SELECT
    *
FROM
    CHAPTERS