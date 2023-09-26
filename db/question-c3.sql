------------------------------------------------------------ CHAPTER 3 - LESSON 0 ------------------------------------------------------------
WITH c3l0 AS (
    SELECT ID
    FROM LESSONS
    WHERE name ='Lệnh IF và khối lệnh ^^'
)
INSERT INTO LECTURES (
        ID,
        LESSON_ID,
        content,
        type,
        level,
        required,
        CREATED_AT,
        UPDATED_AT
    )
SELECT UUID_GENERATE_V4(),
    c3l0.ID,
   'Một lệnh if trong Python được viết như thế này:',
   'text',
    0,
    true,
    NOW(),
    NOW()
FROM c3l0
UNION ALL
SELECT UUID_GENERATE_V4(),
    c3l0.ID,
   '>>> age = 13
    >>> if age > 20:
    print('You are too old !')',
   'code',
    1,
    true,
    NOW(),
    NOW()
FROM c3l0
UNION ALL
SELECT UUID_GENERATE_V4(),
    c3l0.ID,
   'Lệnh if được viết bằng từ khóa if, theo sau đó là điều kiện và dấu hai chấm (:), như trong if age > 20:. Những dòng nằm sau dấu hai chấm phải được đặt trong một khối lệnh, và nếu câu trả lời cho câu hỏi trên là có (hoặc là True, nói theo đúng kiểu lập trình Python), các lệnh trong khối lệnh sẽ được chạy. 
    Giờ ta sẽ nghiên cứu xem viết các khối lệnh và điều kiện như thế nào nhé.',
   'text',
    2,
    true,
    NOW(),
    NOW()
FROM c3l0
UNION ALL
SELECT UUID_GENERATE_V4(),
    c3l0.ID,
   'Khối lệnh ⟨block⟩ là một khối các câu lệnh lập trình. Ví dụ nếu điều kiện if age > 20: thỏa mãn, em hẳn là sẽ muốn làm gì đó nhiều hơn là chỉ in ra mỗi câu You are too old! (Già quá!) Em có thể sẽ muốn nói thêm cái gì đó ngầu hơn tí:',
   'text',
    3,
    true,
    NOW(),
    NOW()
FROM c3l0
UNION ALL
SELECT UUID_GENERATE_V4(),
    c3l0.ID,
   '>>> age = 25
    >>> if age > 20:
        print(''You are too old !'')
        print(''Why are you here ?'')
        print(''Why aren \''t you mowing a lawn or sorting papers?'')',
   'code',
    4,
    true,
    NOW(),
    NOW()
FROM c3l0
UNION ALL
SELECT UUID_GENERATE_V4(),
    c3l0.ID,
   'Trong Python, các khoảng trắng ⟨whitespace⟩ như dấu tab (khi em ấn nút TAB) hoặc dấu cách (khi em ấn nút cách) cực kỳ quan trọng. Các đoạn code cùng hàng (được lùi vào cùng số khoảng trắng tính từ lề bên trái) sẽ được nhóm vào thành một khối lệnh, và nếu dòng code mới nào có nhiều khoảng trắng hơn dòng trước đó thì đó sẽ là bắt đầu của một khối lệnh mới nằm trong khối lệnh trước, như thế này:',
   'text',
    5,
    true,
    NOW(),
    NOW()
FROM c3l0
UNION ALL
SELECT UUID_GENERATE_V4(),
    c3l0.ID,
   'c3l0-1.png',
   'image',
    6,
    true,
    NOW(),
    NOW()
FROM c3l0
UNION ALL
SELECT UUID_GENERATE_V4(),
    c3l0.ID,
   'Ta nhóm các câu lệnh này với nhau thành các khối lệnh vì chúng có liên quan đến
nhau. Những câu lệnh này sẽ được chạy cùng nhau.
Mỗi khi thay đổi vị trí lùi đầu dòng này, về cơ bản là em đang tạo ra các khối lệnh mới. Trong ví dụ sau em sẽ thấy ba khối lệnh riêng biệt được tạo ra chỉ bằng cách lùi đầu dòng như thế:',
   'text',
    7,
    true,
    NOW(),
    NOW()
FROM c3l0
UNION ALL
SELECT UUID_GENERATE_V4(),
    c3l0.ID,
   'c3l0-2.png',
   'image',
    8,
    true,
    NOW(),
    NOW()
FROM c3l0
UNION ALL
SELECT UUID_GENERATE_V4(),
    c3l0.ID,
   'Tuy khối 2 và khối 3 lùi đầu dòng cùng vị trí, nhưng chúng lại là hai khối hoàn toàn tách biệt vì có một khối khác lùi đầu dòng ít hơn (ít khoảng trắng hơn) chen vào giữa.',
   'text',
    9,
    true,
    NOW(),
    NOW()
FROM c3l0
UNION ALL
SELECT UUID_GENERATE_V4(),
    c3l0.ID,
   'Một điều quan trọng khác, chạy một khối lệnh có bốn khoảng trắng và một khối khác tiếp đó có sáu khoảng trắng sẽ sinh ra lỗi lùi đầu dòng ⟨indentation error⟩, vì Python cần ta dùng một chuẩn khoảng trắng giống nhau trên toàn bộ chương trình. Nên một khi em đã dùng bốn khoảng trắng để bắt đầu một khối lệnh thì em phải luôn luôn dùng bốn khoảng trắng. Ví dụ:',
   'text',
    10,
    true,
    NOW(),
    NOW()
FROM c3l0
UNION ALL
SELECT UUID_GENERATE_V4(),
    c3l0.ID,
   '>>> if age > 20:
    print(''You are too old!'')
    print(''Why are you here?'')',
   'code',
    11,
    true,
    NOW(),
    NOW()
FROM c3l0
UNION ALL
SELECT UUID_GENERATE_V4(),
    c3l0.ID,
   'Các khoảng trắng ở đây được hiển thị lên để em có thấy thấy sự khác biệt. Dòng thứ ba có sáu khoảng trắng trong khi nhẽ ra chỉ được phép có bốn. 
   Khi chạy đoạn code này, IDLE sẽ bôi đỏ phần nó thấy có vấn đề và hiển thị thêm một thông báo lỗi SyntaxError để giải thích:',
   'text',
    12,
    true,
    NOW(),
    NOW()
FROM c3l0
UNION ALL
SELECT UUID_GENERATE_V4(),
    c3l0.ID,
   '>>> age = 25
>>> if age > 20:
    print(''You are too old!'')
        print(''Why are you here?'')
    SyntaxError: unexpected indent',
   'code',
    13,
    true,
    NOW(),
    NOW()
FROM c3l0
UNION ALL
SELECT UUID_GENERATE_V4(),
    c3l0.ID,
   'Python đã nhận ra hai khoảng trắng thừa ở đầu lệnh print thứ hai.',
   'text',
    14,
    true,
    NOW(),
    NOW()
FROM c3l0;
------------------------------------------------------------ CHAPTER 3 - LESSON 1 ------------------------------------------------------------
WITH c3l1 AS (
    SELECT ID
    FROM LESSONS
    WHERE name ='Điều kiện là để so sánh hai thứ với nhau'
)
INSERT INTO LECTURES (
        ID,
        LESSON_ID,
        content,
        type,
        level,
        required,
        CREATED_AT,
        UPDATED_AT
    )
SELECT UUID_GENERATE_V4(),
    c3l1.ID,
   'Một lệnh if trong Python được viết như thế này:',
   'text',
    0,
    true,
    NOW(),
    NOW()
FROM c3l1
UNION ALL
SELECT UUID_GENERATE_V4(),
    c3l1.ID,
   '>>> age = 13
    >>> if age > 20:
    print('You are too old !')',
   'code',
    1,
    true,
    NOW(),
    NOW()
FROM c3l1
UNION ALL
SELECT UUID_GENERATE_V4(),
    c3l1.ID,
   'Lệnh if được viết bằng từ khóa if, theo sau đó là điều kiện và dấu hai chấm (:), như trong if age > 20:. Những dòng nằm sau dấu hai chấm phải được đặt trong một khối lệnh, và nếu câu trả lời cho câu hỏi trên là có (hoặc là True, nói theo đúng kiểu lập trình Python), các lệnh trong khối lệnh sẽ được chạy. 
    Giờ ta sẽ nghiên cứu xem viết các khối lệnh và điều kiện như thế nào nhé.',
   'text',
    2,
    true,
    NOW(),
    NOW()
FROM c3l1
UNION ALL
SELECT UUID_GENERATE_V4(),
    c3l1.ID,
   'Khối lệnh ⟨block⟩ là một khối các câu lệnh lập trình. Ví dụ nếu điều kiện if age > 20: thỏa mãn, em hẳn là sẽ muốn làm gì đó nhiều hơn là chỉ in ra mỗi câu You are too old! (Già quá!) Em có thể sẽ muốn nói thêm cái gì đó ngầu hơn tí:',
   'text',
    3,
    true,
    NOW(),
    NOW()
FROM c3l1
UNION ALL
SELECT UUID_GENERATE_V4(),
    c3l1.ID,
   '>>> age = 25
    >>> if age > 20:
        print(''You are too old !'')
        print(''Why are you here ?'')
        print(''Why aren \''t you mowing a lawn or sorting papers?'')',
   'code',
    4,
    true,
    NOW(),
    NOW()
FROM c3l1
UNION ALL
SELECT UUID_GENERATE_V4(),
    c3l1.ID,
   'Trong Python, các khoảng trắng ⟨whitespace⟩ như dấu tab (khi em ấn nút TAB) hoặc dấu cách (khi em ấn nút cách) cực kỳ quan trọng. Các đoạn code cùng hàng (được lùi vào cùng số khoảng trắng tính từ lề bên trái) sẽ được nhóm vào thành một khối lệnh, và nếu dòng code mới nào có nhiều khoảng trắng hơn dòng trước đó thì đó sẽ là bắt đầu của một khối lệnh mới nằm trong khối lệnh trước, như thế này:',
   'text',
    5,
    true,
    NOW(),
    NOW()
FROM c3l1
UNION ALL
SELECT UUID_GENERATE_V4(),
    c3l1.ID,
   'c3l1-1.png',
   'image',
    6,
    true,
    NOW(),
    NOW()
FROM c3l1
UNION ALL
SELECT UUID_GENERATE_V4(),
    c3l1.ID,
   'Ta nhóm các câu lệnh này với nhau thành các khối lệnh vì chúng có liên quan đến
nhau. Những câu lệnh này sẽ được chạy cùng nhau.
Mỗi khi thay đổi vị trí lùi đầu dòng này, về cơ bản là em đang tạo ra các khối lệnh mới. Trong ví dụ sau em sẽ thấy ba khối lệnh riêng biệt được tạo ra chỉ bằng cách lùi đầu dòng như thế:',
   'text',
    7,
    true,
    NOW(),
    NOW()
FROM c3l1
UNION ALL
SELECT UUID_GENERATE_V4(),
    c3l1.ID,
   'c3l1-2.png',
   'image',
    8,
    true,
    NOW(),
    NOW()
FROM c3l1
UNION ALL
SELECT UUID_GENERATE_V4(),
    c3l1.ID,
   'Tuy khối 2 và khối 3 lùi đầu dòng cùng vị trí, nhưng chúng lại là hai khối hoàn toàn tách biệt vì có một khối khác lùi đầu dòng ít hơn (ít khoảng trắng hơn) chen vào giữa.',
   'text',
    9,
    true,
    NOW(),
    NOW()
FROM c3l1
UNION ALL
SELECT UUID_GENERATE_V4(),
    c3l1.ID,
   'Một điều quan trọng khác, chạy một khối lệnh có bốn khoảng trắng và một khối khác tiếp đó có sáu khoảng trắng sẽ sinh ra lỗi lùi đầu dòng ⟨indentation error⟩, vì Python cần ta dùng một chuẩn khoảng trắng giống nhau trên toàn bộ chương trình. Nên một khi em đã dùng bốn khoảng trắng để bắt đầu một khối lệnh thì em phải luôn luôn dùng bốn khoảng trắng. Ví dụ:',
   'text',
    10,
    true,
    NOW(),
    NOW()
FROM c3l1
UNION ALL
SELECT UUID_GENERATE_V4(),
    c3l1.ID,
   '>>> if age > 20:
    print(''You are too old!'')
    print(''Why are you here?'')',
   'code',
    11,
    true,
    NOW(),
    NOW()
FROM c3l1
UNION ALL
SELECT UUID_GENERATE_V4(),
    c3l1.ID,
   'Các khoảng trắng ở đây được hiển thị lên để em có thấy thấy sự khác biệt. Dòng thứ ba có sáu khoảng trắng trong khi nhẽ ra chỉ được phép có bốn. 
   Khi chạy đoạn code này, IDLE sẽ bôi đỏ phần nó thấy có vấn đề và hiển thị thêm một thông báo lỗi SyntaxError để giải thích:',
   'text',
    12,
    true,
    NOW(),
    NOW()
FROM c3l1
UNION ALL
SELECT UUID_GENERATE_V4(),
    c3l1.ID,
   '>>> age = 25
>>> if age > 20:
    print(''You are too old!'')
        print(''Why are you here?'')
    SyntaxError: unexpected indent',
   'code',
    13,
    true,
    NOW(),
    NOW()
FROM c3l1
UNION ALL
SELECT UUID_GENERATE_V4(),
    c3l1.ID,
   'Python đã nhận ra hai khoảng trắng thừa ở đầu lệnh print thứ hai.',
   'text',
    14,
    true,
    NOW(),
    NOW()
FROM c3l1;

