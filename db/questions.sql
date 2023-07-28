------------------------------------------------------------ CHAPTER 1 - LESSON 0 ------------------------------------------------------------
WITH c1l0 AS (
    SELECT
        ID
    FROM
        LESSONS
    WHERE
        name ='Làm toán với Python?'
)
INSERT INTO
    LECTURES (
        ID,
        LESSON_ID,
        content,
        type,
        level,
        required,
        CREATED_AT,
        UPDATED_AT
    )
SELECT
    UUID_GENERATE_V4(),
    c1l0.ID,
   'Thông thường, khi được bảo làm phép nhân hai số với nhau ví dụ 8 x 3.57, em sẽ lôi máy tính hoặc giấy bút ra để tính phải không nào. Giờ sao không dùng Python shell để làm phép tính này? Thử nhé.',
   'text',
    0,
    true,
    NOW(),
    NOW()
FROM
    c1l0
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l0.ID,
   'Bật Python shell lên như hướng dẫn trong Chương 1, sau đó nhập biểu thức sau vào chỗ dấu nháy:',
   'text',
    1,
    true,
    NOW(),
    NOW()
FROM
    c1l0
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l0.ID,
   '>>> 8 * 3.57
    28.56',
   'code',
    2,
    true,
    NOW(),
    NOW()
FROM
    c1l0
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l0.ID,
   'Ta thấy là khi làm phép nhân trong Python, ta sử dụng dấu sao (*) thay cho dấu nhân (x).',
   'text',
    3,
    true,
    NOW(),
    NOW()
FROM
    c1l0
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l0.ID,
   'Biến chỉ là một mảnh giấy ghi chú!',
   'text',
    4,
    true,
    NOW(),
    NOW()
FROM
    c1l0
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l0.ID,
   'Giờ thử làm hẳn một bài toán có ý nghĩa đàng hoàng nhé.',
   'text',
    5,
    true,
    NOW(),
    NOW()
FROM
    c1l0
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l0.ID,
   'Giả sử vào một ngày đẹp trời, em đang đào xới gì đó ngoài vườn, bỗng nhiên đào được một cái túi đựng 20 đồng vàng. Em chạy ngay xuống hầm, nhét hết chỗ xu vào cái máy siêu-photocopy của ông nội đang phủ đầy bụi để dưới đó (may vừa đủ chỗ để nhét cả 20 xu). Em nghe tiếng máy chạy ù ì loạch xoạch, vài tiếng sau nó nhả ra thêm 10 đồng xu mới toanh.',
   'text',
    6,
    true,
    NOW(),
    NOW()
FROM
    c1l0
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l0.ID,
   'Hỏi, nếu ngày nào cũng làm thế trong vòng một năm liền, em sẽ có bao nhiêu xu tất cả? Trên giấy, các phương trình sẽ kiểu như thế này:',
   'text',
    7,
    true,
    NOW(),
    NOW()
FROM
    c1l0
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l0.ID,
   '10 x 365 = 3650
20 + 3650 = 3670',
   'code',
    8,
    true,
    NOW(),
    NOW()
FROM
    c1l0
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l0.ID,
   'Tất nhiên là làm mấy phép tính này trên máy tính hoặc trên giấy thì quá dễ rồi, nhưng ta cũng có thể làm y như thế trên Python shell. Đầu tiên, nhân 10 xu với 365 ngày một năm để được 3650. Tiếp, ta cộng 20 xu ban đầu vào để được 3670.',
   'text',
    9,
    true,
    NOW(),
    NOW()
FROM
    c1l0
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l0.ID,
   '>>> 10 * 365
3650
>>> 20 + 3650
3670',
   'code',
    10,
    true,
    NOW(),
    NOW()
FROM
    c1l0
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l0.ID,
   'Xong tự nhiên có một con quạ phát hiện ra mấy đồng xu lấp lánh trong phòng, thế là tuần nào nó cũng lượn vào trộm mất ba xu. Hỏi, đến cuối năm em còn lại bao nhiêu xu? Các phép tính trên shell sẽ trông như thế này:',
   'text',
    11,
    true,
    NOW(),
    NOW()
FROM
    c1l0
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l0.ID,
   '>>> 3 * 52
156
>>> 3670 - 156
3514',
   'code',
    12,
    true,
    NOW(),
    NOW()
FROM
    c1l0
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l0.ID,
   'Đầu tiên, ta nhân 3 xu với 52 tuần trong năm. Kết quả là 156. Lấy tổng số xu ta có (3670) trừ đi số đó sẽ được 3514 xu còn lại vào cuối năm.',
   'text',
    13,
    true,
    NOW(),
    NOW()
FROM
    c1l0;

------------------------------------------------------------ CHAPTER 1 - LESSON 1 ------------------------------------------------------------
WITH c1l1 AS (
    SELECT
        ID
    FROM
        LESSONS
    WHERE
        name ='Các toán tử trong Python'
)
INSERT INTO
    LECTURES (
        ID,
        LESSON_ID,
        content,
        type,
        level,
        required,
        CREATED_AT,
        UPDATED_AT
    )
SELECT
    UUID_GENERATE_V4(),
    c1l1.ID,
   'Em có thể làm các phép cộng, trừ, nhân, chia trong Python shell, cùng với những phép tính khác nữa mà ta sẽ tạm thời chưa nói tới. Các dấu được Python dùng để tính toán này được gọi là các toán tử ⟨operator⟩, được liệt kê ở Bảng 2-1.',
   'text',
    0,
    true,
    NOW(),
    NOW()
FROM
    c1l1
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l1.ID,
   'c1l1-1.png',
   'image',
    1,
    true,
    NOW(),
    NOW()
FROM
    c1l1
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l1.ID,
   'Dấu gạch chéo ⟨forward slash⟩ (/) được dùng cho phép chia vì nó giống với dấu gạch khi ta viết phân số. Giả sử nếu ta có 100 tên cướp biển và 20 cái thùng lớn, giờ muốn biết mỗi thùng có thể giấu được bao nhiêu tên cướp biển thì em sẽ phải chia 100 tên ra 20 thùng (100 ÷ 20) bằng cách nhập 100 / 20 vào Python shell. Nhớ là dấu gạch chéo này nghiêng về phía bên phải nhé.',
   'text',
    2,
    true,
    NOW(),
    NOW()
FROM
    c1l1;

------------------------------------------------------------ CHAPTER 1 - LESSON 2 ------------------------------------------------------------
WITH c1l2 AS (
    SELECT
        ID
    FROM
        LESSONS
    WHERE
        name ='Luyện tập toán tử nhé!'
)
INSERT INTO
    QUESTIONS (
        ID,
        LESSON_ID,
        question_content,
        answer_content,
        score,
        answer_type,
        level,
        required,
        CREATED_AT,
        UPDATED_AT
    )
SELECT
    UUID_GENERATE_V4(),
    c1l2.ID,
   'Python sử dụng dấu nào để thực hiện phép nhân?',
    ARRAY['+', '-', '*', '/'],
    ARRAY[0,0,5,0],
    'single_choice',
    0,
    true,
    NOW(),
    NOW()
FROM
    c1l2
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l2.ID,
   'Các phép tính nào Python có thể thực hiện trong Python shell?',
    ARRAY['Cộng', 'Trừ', 'Nhân', 'Chia', 'Lũy thừa'],
    ARRAY[1,1,1,1,-2],
    'multiple_choice',
    1,
    true,
    NOW(),
    NOW()
FROM
    c1l2
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l2.ID,
   'Kết quả của phép tính sau là bao nhiêu?
7 * 9 = _______',
    ARRAY['63'],
    ARRAY[5],
    'text_input',
    2,
    true,
    NOW(),
    NOW()
FROM
    c1l2
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l2.ID,
   'Nếu ta muốn thực hiện phép chia, ta sử dụng toán tử nào sau đây?',
    ARRAY['/', '-', '*', '+'],
    ARRAY[5,0,0,0],
    'single_choice',
    3,
    true,
    NOW(),
    NOW()
FROM
    c1l2
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l2.ID,
   'Python sử dụng dấu nào để thực hiện phép nhân?',
    ARRAY['+', '-', '*', '/'],
    ARRAY[0,0,5,0],
    'single_choice',
    4,
    true,
    NOW(),
    NOW()
FROM
    c1l2
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l2.ID,
   'Các bước thực hiện để tính số xu còn lại vào cuối năm trong bài học là:',
    ARRAY['10 * 365', '20 + 3650', '3 * 52', '3670 - 156'],
    ARRAY[0,0,0,5],
    'single_choice',
    5,
    true,
    NOW(),
    NOW()
FROM
    c1l2
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l2.ID,
   'Trong Python, để thực hiện phép chia lấy phần nguyên, ta sử dụng toán tử nào?',
    ARRAY['//', '%', '/', '*'],
    ARRAY[0,0,5,0],
    'single_choice',
    6,
    true,
    NOW(),
    NOW()
FROM
    c1l2
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l2.ID,
   'Các toán tử sau đây có thể được sử dụng để thực hiện phép tính nhân là:',
    ARRAY['*', 'x', '**', '/'],
    ARRAY[5,-2,-2,-2],
    'single_choice',
    7,
    true,
    NOW(),
    NOW()
FROM
    c1l2
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l2.ID,
   'Để thực hiện phép tính lũy thừa trong Python, ta sử dụng toán tử nào?',
    ARRAY['^', '**', '*', '//'],
    ARRAY[0,5,0,0],
    'single_choice',
    8,
    true,
    NOW(),
    NOW()
FROM
    c1l2
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l2.ID,
   'Các phép tính sau đây có độ ưu tiên từ cao đến thấp là:',
    ARRAY['Phép cộng, phép trừ, phép nhân, phép chia', 'Phép nhân, phép chia, phép cộng, phép trừ', 'Phép nhân, phép cộng, phép chia, phép trừ', 'Phép cộng, phép nhân, phép trừ, phép chia'],
    ARRAY[0,5,0,0],
    'single_choice',
    9,
    true,
    NOW(),
    NOW()
FROM
    c1l2
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l2.ID,
   'Để thực hiện phép chia lấy phần dư trong Python, ta sử dụng toán tử nào?',
    ARRAY['%', '*', '/', '//'],
    ARRAY[5,0,0,0],
    'single_choice',
    10,
    true,
    NOW(),
    NOW()
FROM
    c1l2
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l2.ID,
   'Các phép tính sau đây có kết quả là một số thực là:',
    ARRAY['8 / 2', '7 / 3', '10 // 3', '5 * 2'],
    ARRAY[2,2,-2,2],
    'multiple_choice',
    11,
    true,
    NOW(),
    NOW()
FROM
    c1l2
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l2.ID,
   'Các phép tính sau đây có kết quả là một số chẵn là:',
    ARRAY['9 / 3','5 * 4','7 // 2','11 - 3'],
    ARRAY[-1,2,-2,2],
    'multiple_choice',
    12,
    true,
    NOW(),
    NOW()
FROM
    c1l2
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l2.ID,
   'Các phép tính sau đây có kết quả là một số lẻ là:',
    ARRAY['6 / 2','8 * 2','9 // 4','12 - 5'],
    ARRAY[2,-1,-1,2],
    'single_choice',
    13,
    true,
    NOW(),
    NOW()
FROM
    c1l2
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l2.ID,
   'Để thực hiện phép chia lấy phần dư trong Python, ta sử dụng toán tử nào?',
    ARRAY['%', '*', '/', '//'],
    ARRAY[5,0,0,0],
    'single_choice',
    14,
    true,
    NOW(),
    NOW()
FROM
    c1l2
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l2.ID,
   'Kết quả của phép tính sau là bao nhiêu?
(17//5+2)*3',
    ARRAY['15'],
    ARRAY[5],
    'text_input',
    15,
    true,
    NOW(),
    NOW()
FROM
    c1l2
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l2.ID,
    'Toán tử nào được sử dụng để tính phần dư của một phép chia?',
    ARRAY['//', '%', '/', '*'],
    ARRAY[0, 5, 0, 0],
    'single_choice',
    15,
    true,
    NOW(),
    NOW()
FROM
    c1l2
UNION ALL
SELECT
    UUID_GENERATE_V4(),
    c1l2.ID,
    'Trong Python, toán tử nào dùng để tăng giá trị của biến lên 1?',
    ARRAY['++', '--', '+=1', '+='],
    ARRAY[0, 0, 5, 0],
    'single_choice',
    18,
    true,
    NOW(),
    NOW()
FROM
    c1l2
UNION ALL
SELECT
    UUID_GENERATE_V4(),
    c1l2.ID,
    'Các toán tử sau đây có thể thực hiện trên chuỗi (string) trong Python là:',
    ARRAY['+', '-', '*', '/', '+=', '=='],
    ARRAY[0, 0, 0, 0, 5, 0],
    'multiple_choice',
    19,
    true,
    NOW(),
    NOW()
FROM
    c1l2
UNION ALL
SELECT
    UUID_GENERATE_V4(),
    c1l2.ID,
    'Toán tử "is" và "==" có ý nghĩa khác nhau như thế nào?',
    ARRAY['"is" so sánh giá trị, "==" so sánh địa chỉ bộ nhớ',
          '"is" so sánh địa chỉ bộ nhớ, "==" so sánh giá trị',
          '"is" và "==" đều so sánh giá trị',
          '"is" và "==" đều so sánh địa chỉ bộ nhớ'],
    ARRAY[0, 5, 0, 0],
    'multiple_choice',
    20,
    true,
    NOW(),
    NOW()
FROM
    c1l2
UNION ALL
SELECT
    UUID_GENERATE_V4(),
    c1l2.ID,
    'Kết quả của phép tính sau là bao nhiêu?
8 + 2 * 3 = _______',
    ARRAY['14'],
    ARRAY[5],
    'text_input',
    21,
    true,
    NOW(),
    NOW()
FROM
    c1l2
UNION ALL
SELECT
    UUID_GENERATE_V4(),
    c1l2.ID,
    'Để kiểm tra xem một phần tử có tồn tại trong một list hay không, ta sử dụng toán tử nào?',
    ARRAY['in', 'not in', 'is', '=='],
    ARRAY[5, 0, 0, 0],
    'text_input',
    22,
    true,
    NOW(),
    NOW()
FROM
    c1l2;

------------------------------------------------------------ CHAPTER 1 - LESSON 3 ------------------------------------------------------------
WITH c1l3 AS (
    SELECT
        ID
    FROM
        LESSONS
    WHERE
        name ='Thứ tự tính toán?'
)
INSERT INTO
    LECTURES (
        ID,
        LESSON_ID,
        content,
        type,
        level,
        required,
        CREATED_AT,
        UPDATED_AT
    )
SELECT
    UUID_GENERATE_V4(),
    c1l3.ID,
   'Trong lập trình, ta sẽ dùng các dấu ngoặc tròn để điều khiển thứ tự tính toán. Cứ cái gì mà dùng toán tử thì đều gọi là phép tính ⟨operation⟩. Phép nhân và phép chia được xếp hạng cao hơn phép cộng và phép trừ, nghĩa là được ưu tiên hơn. Nói cách khác, khi em viết ra một biểu thức trong Python, các phép nhân và phép chia sẽ được tính trước phép cộng và phép trừ.',
   'text',
    0,
    true,
    NOW(),
    NOW()
FROM
    c1l3
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l3.ID,
   'Ví dụ, trong biểu thức sau, số 30 và 20 sẽ được nhân với nhau trước, sau đó 5 mới được cộng vào tích trên.',
   'text',
    1,
    true,
    NOW(),
    NOW()
FROM
    c1l3
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l3.ID,
   '>>> 5 + 30 * 20
605',
   'code',
    2,
    true,
    NOW(),
    NOW()
FROM
    c1l3
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l3.ID,
   'Nếu dùng từ ngữ để diễn đạt biểu thức này thì sẽ là, “nhân 30 với 20, lấy kết quả cộng với 5”. Kết quả là 605. Ta có thể thay đổi thứ tự của các phép tính bằng cách ngoặc hai số đầu tiên lại như thế này:',
   'text',
    3,
    true,
    NOW(),
    NOW()
FROM
    c1l3
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l3.ID,
   '>>> (5 + 30) * 20
700',
   'code',
    4,
    true,
    NOW(),
    NOW()
FROM
    c1l3
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l3.ID,
   'Kết quả của biểu thức này là 700 (không phải 605 nữa) vì dấu ngoặc sẽ yêu cầu Python tính bên trong trước, sau đó mới đến lượt các phép tính bên ngoài. Ví dụ này sẽ được diễn đạt lại là “cộng 5 với 30, sau đó nhân kết quả với 20.”',
   'text',
    5,
    true,
    NOW(),
    NOW()
FROM
    c1l3
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l3.ID,
   'Các dấu ngoặc có thể lồng vào nhau ⟨nested⟩, nghĩa là có thể có ngoặc trong ngoặc, như thế này:',
   'text',
    6,
    true,
    NOW(),
    NOW()
FROM
    c1l3
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l3.ID,
   '>>> ((5 + 30) * 20) / 10
70.0',
   'code',
    7,
    true,
    NOW(),
    NOW()
FROM
    c1l3
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l3.ID,
   'Trong trường hợp này, Python sẽ tính nội dung ở trong ngoặc trong cùng, rồi tính dần ra ngoài, cuối cùng mới đến phép chia. Nói cách khác, biểu thức được diễn đạt là “cộng 5 với 30, nhân kết quả với 20, lấy kết quả mới chia cho 10.” Và thứ tự diễn ra sẽ là:',
   'text',
    8,
    true,
    NOW(),
    NOW()
FROM
    c1l3
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l3.ID,
   'Lấy 5 cộng 30 được 35.
Lấy 35 nhân 20 được 700.
Lấy 700 chia cho 10 để có kết quả cuối cùng là 70.',
   'text',
    9,
    true,
    NOW(),
    NOW()
FROM
    c1l3
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l3.ID,
   'Nếu không có ngoặc, kết quả sẽ hơi khác đi một chút:',
   'text',
    10,
    true,
    NOW(),
    NOW()
FROM
    c1l3
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l3.ID,
   '>>> 5 + 30 * 20 / 10
65.0',
   'code',
    11,
    true,
    NOW(),
    NOW()
FROM
    c1l3
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l3.ID,
   'Lúc này, đầu tiên 30 sẽ nhân với 20 (được 600), rồi 600 chia cho 10 (được 60). Cuối cùng sẽ cộng với 5 để ra kết quả là 65.',
   'text',
    12,
    true,
    NOW(),
    NOW()
FROM
    c1l3;

------------------------------------------------------------ CHAPTER 1 - LESSON 4 ------------------------------------------------------------
WITH c1l4 AS (
    SELECT
        ID
    FROM
        LESSONS
    WHERE
        name ='Biến chỉ là một mảnh giấy ghi chú!'
)
INSERT INTO
    LECTURES (
        ID,
        LESSON_ID,
        content,
        type,
        level,
        required,
        CREATED_AT,
        UPDATED_AT
    )
SELECT
    UUID_GENERATE_V4(),
    c1l4.ID,
   'Biến trong lập trình ⟨variable⟩ được dùng để lưu các thông tin như số, chữ hoặc mảng nhiều số, mảng nhiều chữ, vân vân và mây mây. Em có thể coi biến như một mẩu giấy ghi chú có viết các thông tin trên đó.',
   'text',
    0,
    true,
    NOW(),
    NOW()
FROM
    c1l4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l4.ID,
   'Ví dụ, để tạo ra biến fred, ta sẽ dùng dấu bằng (=) và nói Python ta muốn ghi lại thông tin gì lên tờ giấy kia. Ở đây, ta tạo ra biến fred và nói Python hãy viết số 100 lên (chú ý là các biến khác nhau vẫn có thể có giá trị giống nhau đấy nhé):',
   'text',
    1,
    true,
    NOW(),
    NOW()
FROM
    c1l4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l4.ID,
   '>>> fred = 100',
   'code',
    2,
    true,
    NOW(),
    NOW()
FROM
    c1l4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l4.ID,
   'Ta cũng có thể bảo Python thay đổi biến fred để nó mang thông tin gì đó khác đi. Ví dụ để đổi fred thành số 200:',
   'text',
    3,
    true,
    NOW(),
    NOW()
FROM
    c1l4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l4.ID,
   '>>> fred = 200
>>> print(fred)
200',
   'code',
    4,
    true,
    NOW(),
    NOW()
FROM
    c1l4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l4.ID,
   'Dòng đầu tiên, ta bảo fred ghi lại con số 200. Dòng thứ hai, ta hỏi fred hiện đang giữ thông tin gì, để kiểm tra lại cho chắc. Python sẽ in kết quả ra ở dòng cuối cùng',
   'text',
    5,
    true,
    NOW(),
    NOW()
FROM
    c1l4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l4.ID,
   'Ta cũng có thể có nhiều mảnh giấy như thế (tức là nhiều biến) cho cùng một thông tin giống nhau:',
   'text',
    6,
    true,
    NOW(),
    NOW()
FROM
    c1l4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l4.ID,
   '>>> fred = 200
>>> john = fred
>>> print(john)
200',
   'code',
    7,
    true,
    NOW(),
    NOW()
FROM
    c1l4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l4.ID,
   '10 x 365 = 3650
20 + 3650 = 3670',
   'code',
    8,
    true,
    NOW(),
    NOW()
FROM
    c1l4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l4.ID,
   'Trong ví dụ này, ta bảo Python rằng ta muốn biến john lưu cùng thông tin y như biến fred bằng cách dùng dấu bằng giữa john và fred. 
    Ở đây, rõ ràng đặt tên biến là fred nghe chẳng ăn nhập gì, vì về cơ bản nó không nói cho ta biết biến này lưu trữ cái gì cả. Ta sẽ đổi tên biến từ fred sang number_of_coins như thế này:',
   'text',
    9,
    true,
    NOW(),
    NOW()
FROM
    c1l4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l4.ID,
   '>>> number_of_coins = 200
>>> print(number_of_coins)
200',
   'code',
    10,
    true,
    NOW(),
    NOW()
FROM
    c1l4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l4.ID,
   'Tên biến có thể được viết bằng chữ cái, số và ký tự gạch dưới (_), nhưng không bắt đầu bằng số được. Em có thể dùng bất cứ gì từ một ký tự duy nhất (a chẳng hạn) cho đến cả một câu dài ngoằng để làm tên biến. (Vì tên biến không thể có khoảng trắng nên ta dùng dấu gạch dưới thay cho dấu cách.) Đôi khi, khi đang làm gì đó nhanh nhanh chóng chóng, dùng tên biến ngắn gọn là phù hợp nhất. Tên biến mà em chọn thường phụ thuộc vào việc em cần nó có có ý nghĩa đến mức nào.',
   'text',
    11,
    true,
    NOW(),
    NOW()
FROM
    c1l4;

------------------------------------------------------------ CHAPTER 1 - LESSON 5 ------------------------------------------------------------
WITH c1l5 AS (
    SELECT
        ID
    FROM
        LESSONS
    WHERE
        name ='Sử dụng biến!'
)
INSERT INTO
    LECTURES (
        ID,
        LESSON_ID,
        content,
        type,
        level,
        required,
        CREATED_AT,
        UPDATED_AT
    )
SELECT
    UUID_GENERATE_V4(),
    c1l5.ID,
   'Còn nhớ mấy biểu thức em dùng để tính xem cuối năm em sẽ có bao nhiêu xu nếu dùng phát minh kỳ diệu của ông nội đang để dưới hầm để đẻ ra xu mới không? Mấy biểu thức này này:',
   'text',
    0,
    true,
    NOW(),
    NOW()
FROM
    c1l5
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l5.ID,
   '>>> 20 + 10 * 365
3670
>>> 3 * 52
156
>>> 3670 - 156
3514',
   'code',
    1,
    true,
    NOW(),
    NOW()
FROM
    c1l5
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l5.ID,
   'Ta có thể biến chúng thành một dòng biểu thức duy nhất:',
   'text',
    2,
    true,
    NOW(),
    NOW()
FROM
    c1l5
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l5.ID,
   '>>> 20 + 10 * 365 - 3 * 52
3514',
   'code',
    3,
    true,
    NOW(),
    NOW()
FROM
    c1l5
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l5.ID,
   'Giờ ta sẽ chuyển mấy con số bên trên thành biến như này:',
   'text',
    4,
    true,
    NOW(),
    NOW()
FROM
    c1l5
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l5.ID,
   '>>> found_coins = 20
>>> magic_coins = 10
>>> stolen_coins = 3',
   'code',
    5,
    true,
    NOW(),
    NOW()
FROM
    c1l5
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l5.ID,
   'Mấy dòng này sẽ tạo ra các biến found_coins (số xu nhặt được), magic_coins (số xu mới được tạo ra từ máy) và stolen_coins (số xu bị mất).',
   'text',
    6,
    true,
    NOW(),
    NOW()
FROM
    c1l5
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l5.ID,
   '>>> found_coins + magic_coins * 365 - stolen_coins * 52
3514',
   'code',
    7,
    true,
    NOW(),
    NOW()
FROM
    c1l5
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l5.ID,
   'Ơ vẫn ra cùng kết quả kìa, thế thì nói làm gì? À ha, sức mạnh ma thuật của biến chính là ở đây. Giả sử trên cửa sổ giờ có một con bù nhìn, con quạ thấy thế sợ quá chỉ trộm được hai xu thay vì ba xu thì sao? Một khi đã tạo ra biến, ta có thể thay đổi để nó có giá trị mới, và bất cứ chỗ nào dùng biến đó sẽ được thay đổi theo. Ta có thể thay đổi giá trị của biến stolen_coins sang 2 như sau:',
   'text',
    8,
    true,
    NOW(),
    NOW()
FROM
    c1l5
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l5.ID,
   '>>> stolen_coins = 2',
   'code',
    9,
    true,
    NOW(),
    NOW()
FROM
    c1l5
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l5.ID,
   'Em có thể thử thay đổi các biến khác, rồi chép (CTRL-C) và dán (CTRL-V) lại biểu thức trên để thấy kết quả thay đổi như thế nào. Giả sử em căn thời gian chính xác rồi đá cái máy một phát, máy sẽ nhả ra thêm 3 xu mỗi lần chạy, cuối năm em sẽ có tổng cộng 4661 xu:',
   'text',
    10,
    true,
    NOW(),
    NOW()
FROM
    c1l5
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l5.ID,
   '>>> magic_coins = 13
>>> found_coins + magic_coins * 365 - stolen_coins * 52
4661',
   'code',
    11,
    true,
    NOW(),
    NOW()
FROM
    c1l5
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c1l5.ID,
   'Đương nhiên, sử dụng biến trong những biểu thức đơn giản kiểu này thì mới chỉ có tác dụng tí tẹo thôi. Chưa đến mức cực kỳ có tác dụng. Nhưng giờ em chỉ cần nhớ rằng biến là một cách để ghi lại mọi thứ để về sau còn dùng lại.',
   'text',
    12,
    true,
    NOW(),
    NOW()
FROM
    c1l5;

------------------------------------------------------------ CHAPTER 2 - LESSON 0 ------------------------------------------------------------
WITH c2l0 AS (
    SELECT
        ID
    FROM
        LESSONS
    WHERE
        name ='Khởi tạo chuỗi'
)
INSERT INTO
    LECTURES (
        ID,
        LESSON_ID,
        content,
        type,
        level,
        required,
        CREATED_AT,
        UPDATED_AT
    )
SELECT
    UUID_GENERATE_V4(),
    c2l0.ID,
   'Trong Python, chuỗi được tạo ra bằng cách lồng các câu vào trong một cặp ngoặc đơn hoặc ngoặc kép (Ta phải làm thế để bảo máy tính đây là số, kia là chữ, kiểu vậy). Lấy ví dụ ta có thể dùng lại biến fred ở Chương 2 để ghi lại một chuỗi như này:',
   'text',
    0,
    true,
    NOW(),
    NOW()
FROM
    c2l0
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l0.ID,
   '>>> fred = "Why do gorillas have big nostrils? Big fingers!!"',
   'code',
    1,
    true,
    NOW(),
    NOW()
FROM
    c2l0
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l0.ID,
   'Sau đó để xem bên trong fred có gì, ta có thể gõ print(fred) như này:',
   'text',
    2,
    true,
    NOW(),
    NOW()
FROM
    c2l0
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l0.ID,
   '>>> print(fred)
Why do gorillas have big nostrils? Big fingers!!',
   'code',
    3,
    true,
    NOW(),
    NOW()
FROM
    c2l0
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l0.ID,
   'Em cũng có thể dùng dấu ngoặc đơn để tạo chuỗi đấy nhé:',
   'text',
    4,
    true,
    NOW(),
    NOW()
FROM
    c2l0
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l0.ID,
   '>>> fred =''What word is always spelled wrong in the dictionary? Wrong!!''
>>> print(fred)
What word is always spelled wrong in the dictionary? Wrong!!',
   'code',
    5,
    true,
    NOW(),
    NOW()
FROM
    c2l0
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l0.ID,
   'Nhưng mà, nếu câu của em có nhiều hơn một dòng mà chỉ sử dụng dấu ngoặc đơn ('') hoặc ngoặc kép ("), hoặc là nếu em mở bằng ngoặc này và đóng bằng ngoặc kia thì em sẽ gặp lỗi trên Python shell ngay. Thử nhập dòng sau mà xem:',
   'text',
    6,
    true,
    NOW(),
    NOW()
FROM
    c2l0
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l0.ID,
   '>>> fred = "Why do birds fly?
SyntaxError: EOL while scanning string literal',
   'code',
    7,
    true,
    NOW(),
    NOW()
FROM
    c2l0
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l0.ID,
   'Lỗi này nói rằng cú pháp câu lệnh không chính xác, vì em đã phá luật không đóng ngoặc ở cuối chuỗi.',
   'text',
    8,
    true,
    NOW(),
    NOW()
FROM
    c2l0
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l0.ID,
   'Cú pháp ⟨syntax⟩ là sự sắp xếp theo đúng thứ tự của từng chữ trong một câu, hoặc như trong trường hợp này thì là sự sắp xếp theo đúng thứ tự của các từ khóa và ký hiệu trong một chương trình. Vậy SyntaxError nghĩa là em đã làm gì đó không đúng thứ tự khiến Python không hiểu, hoặc là Python đang cần gì đó mà em lại không viết ra. EOL là viết tắt của hết dòng ⟨end-of-line⟩, vậy toàn bộ lỗi nói rằng Python đã đọc hết dòng lệnh rồi mà vẫn không tìm thấy dấu đóng ngoặc ở cuối chuỗi.',
   'text',
    9,
    true,
    NOW(),
    NOW()
FROM
    c2l0
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l0.ID,
   'Để một chuỗi có thể chứa nhiều hơn một dòng chữ (còn gọi là chuỗi nhiều dòng ⟨multiline string⟩), em có thể dùng ba dấu ngoặc đơn (''''''), rồi nhấn ENTER để sang dòng như thế này:',
   'text',
    10,
    true,
    NOW(),
    NOW()
FROM
    c2l0
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l0.ID,
   '>>> fred =''''''Why do birds fly?
It''s faster than walking!''''''',
   'code',
    11,
    true,
    NOW(),
    NOW()
FROM
    c2l0
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l0.ID,
   'In nội dung của fred ra thử xem sao:',
   'text',
    12,
    true,
    NOW(),
    NOW()
FROM
    c2l0
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l0.ID,
   '>>> print(fred)
Why do birds fly?
It''s faster than walking!
3',
   'code',
    13,
    true,
    NOW(),
    NOW()
FROM
    c2l0;

------------------------------------------------------------ CHAPTER 2 - LESSON 1 ------------------------------------------------------------
WITH c2l1 AS (
    SELECT
        ID
    FROM
        LESSONS
    WHERE
        name ='Các vấn đề thường gặp với chuỗi'
)
INSERT INTO
    LECTURES (
        ID,
        LESSON_ID,
        content,
        type,
        level,
        required,
        CREATED_AT,
        UPDATED_AT
    )
SELECT
    UUID_GENERATE_V4(),
    c2l1.ID,
   'Có một ví dụ này rất rối rắm, viết kiểu gì cũng bị bắn ra lỗi:',
   'text',
    0,
    true,
    NOW(),
    NOW()
FROM
    c2l1
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l1.ID,
   '>>> silly_string =''He said, "Aren''t can''t shouldn''t wouldn''t."''
SyntaxError: invalid syntax',
   'code',
    1,
    true,
    NOW(),
    NOW()
FROM
    c2l1
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l1.ID,
   'Ở đây ta đang tạo ra một chuỗi (với biến silly_string), được bọc lại bởi hai dấu ngoặc đơn ở hai đầu, nhưng bản thân chuỗi lại có mấy từ cũng có dấu ngoặc đơn là can''t, shouldn''t, wouldn''t, xong ở giữa lại còn có mấy dấu ngoặc kép nữa. Hỗn hết cả loạn!',
   'text',
    2,
    true,
    NOW(),
    NOW()
FROM
    c2l1
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l1.ID,
   'Em phải hiểu Python không thông minh như người đâu, nên cái nó thấy chỉ là chuỗi này thôi He said, "Aren, sau đó là một đống những ký tự thừa thãi gì đâu. Mỗi khi Python nhìn thấy một dấu ngoặc (bất kể là ngoặc đơn hay ngoặc kép), là nó tự hiểu sau dấu ngoặc đó sẽ là chuỗi, thế là nó cứ thế đi cho đến hết dòng để tìm dấu ngoặc còn lại (ngoặc đơn hoặc ngoặc kép tương ứng). Trong trường hợp này, chuỗi được bắt đầu ở dấu ngoặc đơn nằm trước từ He, và kết thúc ở dấu ngoặc đơn ở sau chữ n trong Aren, Python chỉ biết có vậy. IDLE có đánh dấu ngay tại điểm mà mọi thứ trở nên sai sai:',
   'text',
    3,
    true,
    NOW(),
    NOW()
FROM
    c2l1
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l1.ID,
   'c2l1-1.png',
   'image',
    4,
    true,
    NOW(),
    NOW()
FROM
    c2l1
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l1.ID,
   'Dòng cuối của IDLE giải thích đại khái em đang gặp lỗi gì - trong trường hợp này là một lỗi cú pháp.',
   'text',
    5,
    true,
    NOW(),
    NOW()
FROM
    c2l1
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l1.ID,
   'Thay bằng dấu ngoặc kép vào cũng không giải quyết được vấn đề gì:',
   'text',
    6,
    true,
    NOW(),
    NOW()
FROM
    c2l1
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l1.ID,
   '>>> silly_string = "He said, "Aren''t can''t shouldn''t wouldn''t.""
SyntaxError: invalid syntax',
   'code',
    7,
    true,
    NOW(),
    NOW()
FROM
    c2l1
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l1.ID,
   'Lần này, Python phát hiện ra một chuỗi được bọc bởi hai dấu ngoặc kép, chứa các ký tự He said, (và một dấu cách). Tuốt tuồn tuột những thứ còn lại (tính từ Aren''t trở đi) chính là tác nhân gây lỗi:',
   'text',
    8,
    true,
    NOW(),
    NOW()
FROM
    c2l1
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l1.ID,
   'c2l1-2.png',
   'image',
    9,
    true,
    NOW(),
    NOW()
FROM
    c2l1
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l1.ID,
   'Đó là do, dưới góc nhìn của Python, tất cả những gì thừa thãi đều không nên tồn tại. Nó đi tìm dấu ngoặc tiếp theo để kết thúc chuỗi và hoàn toàn không hiểu em muốn nó làm gì với mấy thứ hầm bà lằng nhằng sau dấu đóng ngoặc đó.',
   'text',
    10,
    true,
    NOW(),
    NOW()
FROM
    c2l1
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l1.ID,
   'Giải pháp cho tình huống này là dùng chuỗi nhiều dòng mà ta vừa học được bằng cách sử dụng ba dấu ngoặc đơn (''''''), như vậy, ta có thể kết hợp cả ngoặc đơn lẫn ngoặc kép mà không gặp vấn đề gì. Đúng hơn là, một khi đã bọc bằng ba dấu ngoặc đơn, ta có thể dùng bao nhiêu ngoặc đơn ngoặc kép gì trong chuỗi cũng được (miễn là đừng có dùng ba dấu ngoặc đơn trong đó). Đây là phiên bản ngon lành của chuỗi lúc nãy:',
   'text',
    11,
    true,
    NOW(),
    NOW()
FROM
    c2l1
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l1.ID,
   'silly_string =''''''He said, "Aren''t can''t shouldn''t wouldn''t."''''''',
   'code',
    12,
    true,
    NOW(),
    NOW()
FROM
    c2l1
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l1.ID,
   'À khoan, còn cái này nữa. Nếu thực sự chỉ muốn dùng ngoặc đơn hoặc ngoặc kép để bọc chuỗi trong Python thay vì ba dấu ngoặc kia, em có thể dùng dấu gạch ngược (\) trước mỗi dấu ngoặc bị trùng bên trong chuỗi. Việc này gọi là thoát ra ⟨escape⟩. Đây là cách để ta nói với Python rằng “OK, tôi biết trong chuỗi của tôi có ngoặc bị trùng rồi, đề nghị anh bỏ qua cho tới khi anh nhìn thấy dấu đóng ngoặc thật sự nhá.”',
   'text',
    13,
    true,
    NOW(),
    NOW()
FROM
    c2l1
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l1.ID,
   'Việc viết thêm các ký tự thoát vào có thể khiến cho chuỗi trở nên khó đọc hơn, nên dùng chuỗi nhiều dòng phần nào đó ổn hơn. Nhưng biết đâu về sau em lại gặp những đoạn code có dùng ký tự thoát, cho nên dù sao đi nữa, hiểu ý nghĩa của mấy cái dấu gạch ngược này vẫn hơn nhỉ.',
   'text',
    14,
    true,
    NOW(),
    NOW()
FROM
    c2l1
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l1.ID,
   'Đây là vài ví dụ về ký tự thoát:',
   'text',
    15,
    true,
    NOW(),
    NOW()
FROM
    c2l1
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l1.ID,
   '❶>>> single_quote_str =''He said, "Aren\''t can \''t shouldn \''t wouldn \''t."''
❷>>> double_quote_str = " He said,
    \ "Aren''t can''t shouldn''t wouldn''t.\"" > > > print(single_quote_str) He said,
    "Aren''t can''t shouldn''t wouldn''t." > > > print(double_quote_str) He said,
    "Aren''t can''t shouldn''t wouldn''t."',
   'code',
    16,
    true,
    NOW(),
    NOW()
FROM
    c2l1
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l1.ID,
   'À khoan,
    còn cái này nữa.Nếu thực sự chỉ muốn dùng ngoặc đơn hoặc ngoặc kép để bọc chuỗi trong Python thay vì ba dấu ngoặc kia,
    em có thể dùng dấu gạch ngược (\) trước mỗi dấu ngoặc bị trùng bên trong chuỗi.Việc này gọi là thoát ra ⟨ escape ⟩.Đây là cách để ta nói với Python rằng “ OK,
    tôi biết trong chuỗi của tôi có ngoặc bị trùng rồi,
    đề nghị anh bỏ qua cho tới khi anh nhìn thấy dấu đóng ngoặc thật sự nhá.”',
   'text',
    17,
    true,
    NOW(),
    NOW()
FROM
    c2l1
    UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l1.ID,
   'Đầu tiên ở ❶,
    ta tạo ra một chuỗi bằng ngoặc đơn,
    sử dụng dấu gạch ngược để thoát khỏi các ngoặc đơn khác bên trong chuỗi.Sau đó ở ❷,
    ta tạo ra một chuỗi khác bằng dấu ngoặc kép và sử dụng dấu gạch ngược để thoát khỏi các ngoặc kép khác bên trong chuỗi.Dòng cuối cùng ta in các biến vừa được tạo.Em có thể thấy là mấy dấu gạch ngược này hoàn to àn vô hình lúc in nhé.',
   'text',
    18,
    true,
    NOW(),
    NOW()
FROM
    c2l1;

    ------------------------------------------------------------ CHAPTER 2 - LESSON 2 ------------------------------------------------------------
WITH c2l2 AS (
    SELECT
        ID
    FROM
        LESSONS
    WHERE
        name ='Ghép giá trị trong chuỗi!'
)
INSERT INTO
    LECTURES (
        ID,
        LESSON_ID,
        content,
        type,
        level,
        required,
        CREATED_AT,
        UPDATED_AT
    )
SELECT
    UUID_GENERATE_V4(),
    c2l2.ID,
   'Nếu cần viết ra câu gì đó có dính dáng đến dữ liệu của một biến,
    em có thể ghép chúng vào nội dung của chuỗi bằng cách dùng % s,
    một kiểu đánh dấu chỗ cho các giá trị về sau sẽ được thay vào.(
        Ghép giá trị ⟨ embedding value ⟩,
        hay còn được gọi là thay thế nội dung trong chuỗi ⟨ string substitution ⟩,
        là cách lập trình viên mô tả việc “ đưa một giá trị nào đó vào bên trong chuỗi.”
    ) Ví dụ,
    sau khi Python tính to án hoặc lưu lại điểm số trong một game,
    để nhét số điểm đó vào trong một câu kiểu “ Tôi đã ghi được ___ điểm,
    ” em có thể dùng % s ngay chỗ gạch gạch kia,
    rồi nói Python giá trị đó là gì,
    như sau :',
   'text',
    0,
    true,
    NOW(),
    NOW()
FROM
    c2l2
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l2.ID,
   '> > > myscore = 1000 > > > message =''I scored % s points''> > > print(message % myscore) I scored 1000 points',
   'code',
    1,
    true,
    NOW(),
    NOW()
FROM
    c2l2
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l2.ID,
   'Ta vừa tạo ra biến myscore với giá trị 1000 và biến message là một chuỗi với câu “ I scored % s points,
    ” trong đó % s là ký tự đặt chỗ cho số điểm ghi được.Dòng tiếp theo ta gọi print(message) với ký hiệu % để nói Python hãy thay % s bằng giá trị của myscore vào.Kết quả là câu I scored 1000 points được in ra.Ở đây ta không nhất thiết phải sử dụng biến,
    viết như thế này cũng được print(message % 1000).',
   'text',
    2,
    true,
    NOW(),
    NOW()
FROM
    c2l2
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l2.ID,
   'Ta cũng có thể đưa các giá trị khác nhau vào chỗ % s bằng cách dùng các biến khác nhau như sau :',
   'text',
    3,
    true,
    NOW(),
    NOW()
FROM
    c2l2
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l2.ID,
   '> > > joke_text =''%s: a device for finding furniture in the dark''> > > bodypart1 =''Knee''> > > bodypart2 =''Shin''> > > print(joke_text % bodypart1) Knee: a device for finding furniture in the dark > > > print(joke_text % bodypart2) Shin: a device for finding furniture in the dark',
   'code',
    4,
    true,
    NOW(),
    NOW()
FROM
    c2l2
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l2.ID,
   'Ở đây ta có tổng cộng ba biến.Biến đầu tiên joke_text là chuỗi có ký tự đặt chỗ % s.Các biến còn lại là bodypart1 và bodypart2.Khi ta in ra biến joke_text,
    ký hiệu % được sử dụng để thay giá trị của bodypart1 và bodypart2 vào để sinh ra hai câu khác nhau.',
   'text',
    5,
    true,
    NOW(),
    NOW()
FROM
    c2l2
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l2.ID,
   'Em cũng có thể dùng nhiều ký tự đặt chỗ cùng lúc,
    như thế này :',
   'text',
    6,
    true,
    NOW(),
    NOW()
FROM
    c2l2
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l2.ID,
   '> > > nums =''What did the number % s say to the number % s ? Nice belt ! !''> > > print(nums % (0, 8)) What did the number 0 say to the number 8 ? Nice belt ! !',
   'code',
    7,
    true,
    NOW(),
    NOW()
FROM
    c2l2
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l2.ID,
   'Khi có nhiều ký tự đặt chỗ trong câu,
    nhớ là phải dùng ngoặc tròn để bọc những giá trị thay thế vào như bên trên nhé.Các giá trị cần được sắp xếp theo đúng thứ tự chúng được dùng trong chuỗi.',
   'text',
    8,
    true,
    NOW(),
    NOW()
FROM
    c2l2;

------------------------------------------------------------ CHAPTER 2 - LESSON 4 ------------------------------------------------------------
WITH c2l4 AS (
    SELECT
        ID
    FROM
        LESSONS
    WHERE
        name = 'Theo sau chuỗi là mảng!'
)
INSERT INTO
    LECTURES (
        ID,
        LESSON_ID,
        content,
        type,
        level,
        required,
        CREATED_AT,
        UPDATED_AT
    )
SELECT
    UUID_GENERATE_V4(),
    c2l4.ID,
    '“Chân nhện, ngón ếch, mắt kỳ nhông, cánh dơi, bơ ốc sên, vẩy rắn”, đây hẳn là một danh sách mua sắm hết sức không bình thường (tất nhiên, trừ khi em là phù thủy), ở đây ta sẽ dùng nó làm ví dụ để thấy sự khác biệt giữa chuỗi và mảng nhé.',
    'text',
    0,
    true,
    NOW(),
    NOW()
FROM
    c2l4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l4.ID,
    'Ta có thể dùng chuỗi để lưu lại danh sách này vào biến wizard_list như sau:',
    'text',
    1,
    true,
    NOW(),
    NOW()
FROM
    c2l4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l4.ID,
    '>>> wizard_list = ''spider legs, toe of frog, eye of newt, bat wing, slug butter, snake dandruff''
>>> print(wizard_list)
spider legs, toe of frog, eye of newt, bat wing, slug butter, snake dandruff',
    'code',
    2,
    true,
    NOW(),
    NOW()
FROM
    c2l4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l4.ID,
    'Nhưng mặt khác ta cũng có thể tạo ra một mảng ⟨list⟩, một kiểu khá kỳ diệu trong Python, kiểu mà ta có thể can thiệp vào từng phần tử của nó rất dễ dàng. Ta sẽ viết mảng như sau:',
    'text',
    3,
    true,
    NOW(),
    NOW()
FROM
    c2l4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l4.ID,
    '>>> wizard_list = [''spider legs'', ''toe of frog'', ''eye of newt'',''bat wing'', ''slug butter'', ''snake dandruff'']
>>> print(wizard_list)
[''spider legs'', ''toe of frog'', ''eye of newt'', ''bat wing'', ''slug butter'',''snake dandruff'']',
    'code',
    4,
    true,
    NOW(),
    NOW()
FROM
    c2l4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l4.ID,
    'Mảng thường phải gõ nhiều hơn chuỗi một chút, nhưng bù lại ta lại có nhiều quyền điều khiển hơn chuỗi. Ví dụ, ta có thể in ra món thứ ba trong wizard_list (là mắt kỳ nhông) bằng cách nhập vào vị trí của nó ở trong mảng (còn gọi là vị trí chỉ mục ⟨index position⟩) bên trong một cặp ngoặc vuông ([]) như sau:',
    'text',
    5,
    true,
    NOW(),
    NOW()
FROM
    c2l4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l4.ID,
    '>>> print(wizard_list[2])
eye of newt',
    'code',
    6,
    true,
    NOW(),
    NOW()
FROM
    c2l4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l4.ID,
    'Ủa, em tưởng là món thứ ba cơ mà? Đúng, nhưng thứ tự trong mảng lại bắt đầu từ vị trí 0 cơ, cho nên món đầu tiên sẽ ở vị trí 0, món thứ hai ở vị trí 1 và món thứ ba ở vị trí 2. Mình là người tuy nghe không hợp lý lắm nhưng máy tính thì hiểu thế đấy.',
    'text',
    7,
    true,
    NOW(),
    NOW()
FROM
    c2l4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l4.ID,
    'So với chuỗi, khi dùng mảng ta có thể sửa lại danh sách này dễ dàng hơn nhiều. Giả sử thay vì mắt kỳ nhông ta cần lưỡi ốc cơ. Ta có thể làm như sau với mảng:',
    'text',
    8,
    true,
    NOW(),
    NOW()
FROM
    c2l4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l4.ID,
    '>>> wizard_list[2] = ''snail tongue''
>>> print(wizard_list)
[''spider legs'', ''toe of frog'', ''snail tongue'', ''bat wing'', ''slug butter'',''snake dandruff'']',
    'code',
    9,
    true,
    NOW(),
    NOW()
FROM
    c2l4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l4.ID,
    'Như vậy, ta vừa mới nhét món mới lưỡi ốc vào trong mảng ở vị trí thứ 2, lúc trước là mắt kỳ nhông.',
    'text',
    10,
    true,
    NOW(),
    NOW()
FROM
    c2l4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l4.ID,
    'Một thao tác khác là khi ta chỉ cần một phần con của mảng chứ không cần hết toàn bộ mảng. Ta sẽ dùng dấu hai chấm (:) bên trong ngoặc vuông. Ví dụ, gõ đoạn code sau để có được một phần nhỏ của danh sách trên, từ món thứ ba đến thứ năm (các nguyên liệu chuẩn chỉnh cho một chiếc bánh mỳ kẹp cái-gì-đó-không-phải-thịt):',
    'text',
    11,
    true,
    NOW(),
    NOW()
FROM
    c2l4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l4.ID,
    '>>> print(wizard_list[2:5])
[''snail tongue'', ''bat wing'', ''slug butter'']',
    'code',
    12,
    true,
    NOW(),
    NOW()
FROM
    c2l4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l4.ID,
    'Viết [2:5] đồng nghĩa với, “chỉ đưa ra những món nào từ vị trí số 2 đến vị trí số 5 (nhưng không bao gồm cái số 5 nhé)” - hoặc nói cách khác là mấy món số 3, 4, 5.',
    'text',
    13,
    true,
    NOW(),
    NOW()
FROM
    c2l4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l4.ID,
    'Mảng có thể chứa tất cả các thể loại dữ liệu, từ số đến chữ:',
    'text',
    13,
    true,
    NOW(),
    NOW()
FROM
    c2l4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l4.ID,
    '>>> some_numbers = [1, 2, 5, 10, 20]
>>> some_strings = [''Which'', ''Witch'', ''Is'', ''Which'']
>>> numbers_and_strings = [''Why'', ''was'', 6, ''afraid'', ''of'', 7,''because'', 7, 8, 9]
>>> print(numbers_and_strings)
[''Why'', ''was'', 6, ''afraid'', ''of'', 7, ''because'', 7, 8, 9]',
    'code',
    14,
    true,
    NOW(),
    NOW()
FROM
    c2l4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l4.ID,
    'Hoặc thậm chí chứa cả một mảng khác:',
    'text',
    15,
    true,
    NOW(),
    NOW()
FROM
    c2l4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l4.ID,
    '>>> numbers = [1, 2, 3, 4]
>>> strings = [''I'', ''kicked'', ''my'', ''toe'', ''and'', ''it'', ''is'', ''sore'']
>>> mylist = [numbers, strings]
>>> print(mylist)
[[1, 2, 3, 4], [''I'', ''kicked'', ''my'', ''toe'', ''and'', ''it'', ''is'', ''sore'']]',
    'code',
    16,
    true,
    NOW(),
    NOW()
FROM
    c2l4
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l4.ID,
    'Ví dụ mảng-trong-mảng này có ba biến: numbers có bốn số, strings có tám chữ và mylist dùng cả numbers lẫn strings. Mảng thứ ba (mylist) chỉ có hai phần tử thôi vì nó chỉ chứa hai biến kia, chứ không chứa các phần tử của hai biến kia.',
    'code',
    17,
    true,
    NOW(),
    NOW()
FROM
    c2l4;

------------------------------------------------------------ CHAPTER 2 - LESSON 5 ------------------------------------------------------------
WITH c2l5 AS (
    SELECT
        ID
    FROM
        LESSONS
    WHERE
        name = 'Thêm và xóa phần tử trong mảng!'
)
INSERT INTO
    LECTURES (
        ID,
        LESSON_ID,
        content,
        type,
        level,
        required,
        CREATED_AT,
        UPDATED_AT
    )
SELECT
    UUID_GENERATE_V4(),
    c2l5.ID,
    'Để thêm phần tử vào mảng, ta sẽ sử dụng hàm append. Hàm ⟨function⟩ là một mớ Python code thực hiện một việc cụ thể nào đó. Trong trường hợp này, append sẽ nhét thêm một phần tử vào cuối mảng.',
    'text',
    0,
    true,
    NOW(),
    NOW()
FROM
    c2l5
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l5.ID,
    'Ví dụ, để thêm hơi thở của gấu (có thứ đó luôn hả trời ^^) vào danh sách mua sắm của bà phù thủy kia, ta làm như thế này:',
    'text',
    1,
    true,
    NOW(),
    NOW()
FROM
    c2l5
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l5.ID,
    '>>> wizard_list.append(''bear burp'')
>>> print(wizard_list)
[''spider legs'', ''toe of frog'', ''snail tongue'', ''bat wing'', ''slug butter'',''snake dandruff'', ''bear burp'']',
    'code',
    2,
    true,
    NOW(),
    NOW()
FROM
    c2l5
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l5.ID,
    'Tương tự, em có thể kéo dài danh sách những thứ kì quặc này ra, như này:',
    'text',
    3,
    true,
    NOW(),
    NOW()
FROM
    c2l5
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l5.ID,
    '>>> wizard_list.append(''mandrake'')
>>> wizard_list.append(''hemlock'')
>>> wizard_list.append(''swamp gas'')',
    'code',
    4,
    true,
    NOW(),
    NOW()
FROM
    c2l5
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l5.ID,
    'Danh sách mua sắm giờ dài như này:',
    'text',
    5,
    true,
    NOW(),
    NOW()
FROM
    c2l5
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l5.ID,
    '>>> print(wizard_list)
[''spider legs'', ''toe of frog'', ''snail tongue'', ''bat wing'', ''slug butter'',''snake dandruff'', ''bear burp'', ''mandrake'', ''hemlock'', ''swamp gas'']',
    'code',
    6,
    true,
    NOW(),
    NOW()
FROM
    c2l5
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l5.ID,
    'Bà phù thủy này chắc chắn đang âm mưu gì đó!
Để bỏ một phần tử ra khỏi mảng, dùng lệnh del (viết tắt của từ xóa ⟨delete⟩). Ví dụ, để bỏ phần tử số sáu ra khỏi danh sách đồ phù thủy kia, là vẩy rắn, thì làm thế này:',
    'text',
    7,
    true,
    NOW(),
    NOW()
FROM
    c2l5
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l5.ID,
    '>>> del wizard_list[5]
>>> print(wizard_list)
[''spider legs'', ''toe of frog'', ''snail tongue'', ''bat wing'', ''slug butter'',''bear burp'', ''mandrake'', ''hemlock'', ''swamp gas'']',
    'code',
    8,
    true,
    NOW(),
    NOW()
FROM
    c2l5
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l5.ID,
    'CHÚ Ý: Đừng quên là các vị trí đều bắt đầu từ 0, nên wizard_list[5] thực ra là phần tử thứ sáu trong danh sách.
Để bỏ đi những thứ ta vừa mới thêm vào lúc nãy:',
    'text',
    9,
    true,
    NOW(),
    NOW()
FROM
    c2l5
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l5.ID,
    '>>> del wizard_list[8]
>>> del wizard_list[7]
>>> del wizard_list[6]
>>> print(wizard_list)
[''spider legs'', ''toe of frog'', ''snail tongue'', ''bat wing'', ''slug butter'',''bear burp'']',
    'text',
    10,
    true,
    NOW(),
    NOW()
FROM
    c2l5;
------------------------------------------------------------ CHAPTER 2 - LESSON 6 ------------------------------------------------------------
WITH c2l6 AS (
    SELECT
        ID
    FROM
        LESSONS
    WHERE
        name = 'Các phép toán với mảng!'
)
INSERT INTO
    LECTURES (
        ID,
        LESSON_ID,
        content,
        type,
        level,
        required,
        CREATED_AT,
        UPDATED_AT
    )
SELECT
    UUID_GENERATE_V4(),
    c2l6.ID,
    'Ta có thể ghép các mảng vào với nhau bằng dấu cộng (+), giống như cộng số ấy. Giả sử ta có hai mảng: list1 chứa từ số 1 đến số 4 và list2 chứa vài từ. Ta có thể ghép chúng lại với nhau bằng dấu + và in ra bằng print như sau:',
    'text',
    0,
    true,
    NOW(),
    NOW()
FROM
    c2l6
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l6.ID,
    '>>> list1 = [1, 2, 3, 4]
>>> list2 = [''I'', ''tripped'', ''over'', ''and'', ''hit'', ''the'', ''floor'']
>>> print(list1 + list2)
[1, 2, 3, 4, ''I'', ''tripped'', ''over'', ''and'', ''hit'', ''the'', ''floor'']',
    'code',
    1,
    true,
    NOW(),
    NOW()
FROM
    c2l6
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l6.ID,
    'Ta cũng có thể ghép hai mảng vào rồi gán kết quả cho một biến khác.',
    'text',
    2,
    true,
    NOW(),
    NOW()
FROM
    c2l6
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l6.ID,
    '>>> list1 = [1, 2, 3, 4]
>>> list2 = [''I'', ''ate'', ''chocolate'', ''and'', ''I'', ''want'', ''more'']
>>> list3 = list1 + list2
>>> print(list3)
[1, 2, 3, 4, ''I'', ''ate'', ''chocolate'', ''and'', ''I'', ''want'', ''more'']',
    'code',
    3,
    true,
    NOW(),
    NOW()
FROM
    c2l6
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l6.ID,
    'Ta cũng có thể nhân mảng với một số. Ví dụ nhân list1 với 5 ta viết là list1 * 5:',
    'text',
    4,
    true,
    NOW(),
    NOW()
FROM
    c2l6
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l6.ID,
    '>>> list1 = [1, 2]
>>> print(list1 * 5)
[1, 2, 1, 2, 1, 2, 1, 2, 1, 2]',
    'code',
    5,
    true,
    NOW(),
    NOW()
FROM
    c2l6
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l6.ID,
    'Thực ra là ta vừa bảo Python lặp lại list1 năm lần, kết quả là ta có 1, 2, 1, 2, 1, 2, 1, 2, 1, 2.
Nhưng mặt khác, phép chia (/) và phép trừ (-) lại không như thế, lỗi luôn, ví dụ:',
    'text',
    6,
    true,
    NOW(),
    NOW()
FROM
    c2l6
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l6.ID,
    '>>> list1 / 20
Traceback (most recent call last):
File "<pyshell>", line 1, in <module>
list1 / 20
TypeError: unsupported operand type(s) for /: ''list'' and ''int''
>>> list1 - 20
Traceback (most recent call last):
File "<pyshell>", line 1, in <module>
list1 - 20
TypeError: unsupported operand type(s) for -: ''list'' and ''int''',
    'code',
    7,
    true,
    NOW(),
    NOW()
FROM
    c2l6
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l6.ID,
    'Nhưng, tại sao lại thế? Thế này, ghép các mảng với nhau bằng dấu + hay lặp lại nó bằng dấu * nghe cũng khá hợp lý đúng không. Nghe hợp lý cả ở ngoài đời ấy chứ. Ví dụ, nếu ai đó đưa em hai tờ danh sách để đi mua hàng và bảo , “Cộng hai danh sách này vào,” em có thể hiểu và viết tuốt tuồn tuột đúng thứ tự cả hai danh sách này ra một danh sách khác, đúng không nào. Tương tự như thế, nếu bảo, “Danh sách này nhân 3 lên nhé,” em có thể hình dung ra ngay là viết lại danh sách này ba lần ra một danh sách khác.',
    'text',
    8,
    true,
    NOW(),
    NOW()
FROM
    c2l6
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l6.ID,
    'Nhưng em sẽ chia mảng ra như thế nào? Giả sử em sẽ làm thế nào để chia một mảng có 6 số (1 đến 6) thành hai phần? Dưới đây mới chỉ là ba cách tạm thôi nhé:',
    'text',
    9,
    true,
    NOW(),
    NOW()
FROM
    c2l6
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l6.ID,
    '[1, 2, 3] [4, 5, 6]
[1] [2, 3, 4, 5, 6]
[1, 2, 3, 4] [5, 6]',
    'code',
    10,
    true,
    NOW(),
    NOW()
FROM
    c2l6
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l6.ID,
    'Ta sẽ chia nó ra ở giữa, hay là sau phần tử đầu tiên, hay là chọn bừa một chỗ nào đó rồi chia nó ra? Câu trả lời không hề đơn giản đúng không, và nếu em hỏi Python, nó cũng sẽ không biết đâu. Thế nên nó mới báo lỗi.',
    'text',
    11,
    true,
    NOW(),
    NOW()
FROM
    c2l6
    UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l6.ID,
    'Câu trả lời cũng tương tự như thế nếu em cộng một cái gì đấy không phải là mảng vào một mảng. Không làm thế được. Ví dụ nếu em thử thêm số 50 vào list1:',
    'text',
    12,
    true,
    NOW(),
    NOW()
FROM
    c2l6
    UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l6.ID,
    '>>> list1 + 50
Traceback (most recent call last):
File "<pyshell>", line 1, in <module>
list1 + 50
TypeError: can only concatenate list (not "int") to list',
    'code',
    13,
    true,
    NOW(),
    NOW()
FROM
    c2l6
    UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l6.ID,
    'Lỗi ở đây là như nào vậy? Được rồi, ý em là sao khi muốn cộng 50 vào một mảng? Cộng 50 vào mỗi phần tử à? Nếu phần tử không phải số thì sao? Hay là muốn cộng số 50 vào đầu mảng hay cuối mảng hay gì?',
    'text',
    14,
    true,
    NOW(),
    NOW()
FROM
    c2l6
    UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l6.ID,
    'Trong lập trình máy tính, các câu lệnh cần phải chạy y xì như nhau mỗi khi được gọi. Máy tính ngố lắm chỉ có thể hiểu đen với trắng thôi. Bảo nó tự đưa ra quyết định là nó xoè ra lỗi ngay.',
    'text',
    15,
    true,
    NOW(),
    NOW()
FROM
    c2l6;
------------------------------------------------------------ CHAPTER 2 - LESSON 8 ------------------------------------------------------------
WITH c2l8 AS (
    SELECT
        ID
    FROM
        LESSONS
    WHERE
        name = 'Tuble cũng chỉ là mảng!'
)
INSERT INTO
    LECTURES (
        ID,
        LESSON_ID,
        content,
        type,
        level,
        required,
        CREATED_AT,
        UPDATED_AT
    )
SELECT
    UUID_GENERATE_V4(),
    c2l8.ID,
    'Một tuple giống một mảng nhưng lại dùng dấu ngoặc tròn, ví dụ:',
    'text',
    0,
    true,
    NOW(),
    NOW()
FROM
    c2l8
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l8.ID,
    '>>> fibs = (0, 1, 1, 2, 3)
>>> print(fibs[3])',
    'code',
    1,
    true,
    NOW(),
    NOW()
FROM
    c2l8
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l8.ID,
    'Ta vừa mới tạo ra một biến fibs chứa các số 0, 1, 1, 2 và 3. Và cũng như mảng, ta in phần tử ở vị trí thứ 3 của tuple ra bằng print(fibs[3]).',
    'text',
    2,
    true,
    NOW(),
    NOW()
FROM
    c2l8
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l8.ID,
    'Cái khác biệt lớn nhất giữa tuple và mảng, là một khi đã tạo ra tuple rồi, em không thể sửa nó được nữa. Ví dụ, thử thay giá trị đầu tiên của tuple fibs thành 4 (giống như cách mình thay giá trị của mảng wizard_list), ta sẽ gặp lỗi ngay:',
    'text',
    3,
    true,
    NOW(),
    NOW()
FROM
    c2l8
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l8.ID,
    '>>> fibs[0] = 4
Traceback (most recent call last):
File "<pyshell>", line 1, in <module>
fibs[0] = 4
TypeError: ''tuple'' object does not support item assignment',
    'code',
    4,
    true,
    NOW(),
    NOW()
FROM
    c2l8
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l8.ID,
    'Thế sao ta lại phải dùng tuple làm gì? Rất đơn giản, là bởi vì nhiều khi em biết có những thứ không bao giờ thay đổi cả. Nếu em tạo ra một tuple có hai phần tử thì nó chắc chắn luôn luôn chỉ có hai phần tử.',
    'text',
    5,
    true,
    NOW(),
    NOW()
FROM
    c2l8;
------------------------------------------------------------ CHAPTER 2 - LESSON 9 ------------------------------------------------------------
WITH c2l8 AS (
    SELECT
        ID
    FROM
        LESSONS
    WHERE
        name = 'Python maps không phải bản đồ cho em đâu!'
)
INSERT INTO
    LECTURES (
        ID,
        LESSON_ID,
        content,
        type,
        level,
        required,
        CREATED_AT,
        UPDATED_AT
    )
SELECT
    UUID_GENERATE_V4(),
    c2l8.ID,
    'Trong Python, một map (hay còn gọi là dict, viết tắt của từ điển ⟨dictionary⟩) là một tập hợp của nhiều thứ, tương tự mảng và tuple. Điểm khác biệt ở đây là mỗi phần tử trong map đều có một khóa ⟨key⟩ và tương ứng với nó là một giá trị ⟨value⟩.',
    'text',
    0,
    true,
    NOW(),
    NOW()
FROM
    c2l8
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l8.ID,
    'Ví dụ, giả sử em có một danh sách bạn bè và môn thể thao yêu thích của từng người. Ta có thể cho hết danh sách này vào một mảng, tên người đứng trước môn thể thao theo sau, như thế này:',
    'text',
    1,
    true,
    NOW(),
    NOW()
FROM
    c2l8
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l8.ID,
    '>>> favorite_sports = [''Ralph Williams, Football'',
''Michael Tippett, Basketball'',
''Edward Elgar, Baseball'',
''Rebecca Clarke, Netball'',
''Ethel Smyth, Badminton'',
''Frank Bridge, Rugby'']',
    'code',
    2,
    true,
    NOW(),
    NOW()
FROM
    c2l8
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l8.ID,
    'Hỏi, bạn Rebecca Clarke thích môn gì? Em có thể đọc lướt qua mảng này và tìm ra câu trả lời là netball (bóng lưới). Nhưng nhỡ mảng này mà dài đến 100 người (hoặc nhiều hơn nữa) thì sao?',
    'text',
    3,
    true,
    NOW(),
    NOW()
FROM
    c2l8
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l8.ID,
    'Nếu ta lưu lại cũng từng ấy thông tin vào trong một map, với tên người là khóa và môn thể thao là giá trị, code Python sẽ trông như thế này:',
    'text',
    4,
    true,
    NOW(),
    NOW()
FROM
    c2l8
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l8.ID,
    '>>> favorite_sports = {''Ralph Williams'' : ''Football'',
''Michael Tippett'' : ''Basketball'',
''Edward Elgar'' : ''Baseball'',
''Rebecca Clarke'' : ''Netball'',
''Ethel Smyth'' : ''Badminton'',
''Frank Bridge'' : ''Rugby''}',
    'code',
    5,
    true,
    NOW(),
    NOW()
FROM
    c2l8
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l8.ID,
    'Ta dùng dấu hai chấm để tách khóa với giá trị, và mỗi khóa và giá trị đều phải được bọc bởi dấu ngoặc đơn. Chú ý nữa là toàn bộ các phần tử trong map phải được bọc lại bằng một cặp ngoặc nhọn ({}), không phải ngoặc tròn, cũng không phải ngoặc vuông nhé.',
    'text',
    6,
    true,
    NOW(),
    NOW()
FROM
    c2l8
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l8.ID,
    'Kết quả ta có là một mảng đối chiếu (mỗi khóa tương ứng với một giá trị) như Bảng sau',
    'text',
    7,
    true,
    NOW(),
    NOW()
FROM
    c2l8
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l8.ID,
    'c2l9-1.png',
    'image',
    8,
    true,
    NOW(),
    NOW()
FROM
    c2l8
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l8.ID,
    'Giờ để xem môn thể thao yêu thích của Rebecca Clarke là gì, ta truy cập vào map favorite_sports và dùng tên của cô làm khóa, như thế này:',
    'text',
    9,
    true,
    NOW(),
    NOW()
FROM
    c2l8
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l8.ID,
    '>>> print(favorite_sports[''Rebecca Clarke''])
Netball',
    'code',
    10,
    true,
    NOW(),
    NOW()
FROM
    c2l8
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l8.ID,
    'Vậy câu trả lời là netball (bóng lưới).',
    'text',
    11,
    true,
    NOW(),
    NOW()
FROM
    c2l8
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l8.ID,
    'Để xóa một giá trị trong map, ta cũng dùng khóa luôn. Ví dụ để xóa Ethel Smyth:',
    'text',
    12,
    true,
    NOW(),
    NOW()
FROM
    c2l8
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l8.ID,
    '>>> del favorite_sports[''Ethel Smyth'']
>>> print(favorite_sports)
{''Rebecca Clarke'': ''Netball'', ''Michael Tippett'': ''Basketball'', ''Ralph
Williams'': ''Football'', ''Edward Elgar'': ''Baseball'', ''Frank Bridge'': ''Rugby''}',
    'code',
    13,
    true,
    NOW(),
    NOW()
FROM
    c2l8
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l8.ID,
    'Để thay đổi giá trị trong map, ta cũng dùng khóa nốt:',
    'text',
    14,
    true,
    NOW(),
    NOW()
FROM
    c2l8
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l8.ID,
    '>>> favorite_sports[''Ralph Williams''] = ''Ice Hockey''
>>> print(favorite_sports)
{''Rebecca Clarke'': ''Netball'', ''Michael Tippett'': ''Basketball'', ''Ralph
Williams'': ''Ice Hockey'', ''Edward Elgar'': ''Baseball'', ''Frank Bridge'': ''Rugby''}',
    'code',
    15,
    true,
    NOW(),
    NOW()
FROM
    c2l8
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l8.ID,
    'Ta vừa mới đổi môn thể thao yêu thích của Ralph Williams từ Football thành Ice Hockey đó.',
    'text',
    16,
    true,
    NOW(),
    NOW()
FROM
    c2l8
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l8.ID,
    'Em cũng thấy đấy, dùng map cũng đại khái giống dùng mảng và tuple thôi, trừ việc em không thể ghép hai map vào với nhau bằng dấu cộng (+) được. Thử đi, em sẽ gặp lỗi này:',
    'text',
    17,
    true,
    NOW(),
    NOW()
FROM
    c2l8
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l8.ID,
    '>>> favorite_sports = {''Rebecca Clarke'': ''Netball'',
''Michael Tippett'': ''Basketball'',
''Ralph Williams'': ''Ice Hockey'',
''Edward Elgar'': ''Baseball'',
''Frank Bridge'': ''Rugby''}

>>> favorite_colors = {''Malcolm Warner'': ''Pink polka dots'',
''James Baxter'': ''Orange stripes'',
''Sue Lee'': ''Purple paisley''}

>>> favorite_sports + favorite_colors
Traceback (most recent call last):
File "<stdin>", line 1, in <module>
TypeError: unsupported operand type(s) for +: ''dict'' and ''dict''',
    'code',
    18,
    true,
    NOW(),
    NOW()
FROM
    c2l8
UNION
ALL
SELECT
    UUID_GENERATE_V4(),
    c2l8.ID,
    'Python không hiểu nổi ghép các map vào như thế nào đâu, nên nó bắn ra lỗi thôi.',
    'text',
    19,
    true,
    NOW(),
    NOW()
FROM
    c2l8;