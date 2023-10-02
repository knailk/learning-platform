import { Helmet } from 'react-helmet';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { Carousel, Col, Row } from 'antd';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
const questions = [
    {
        id: 1,
        question: 'Kết quả phép tính sau trong Python: ',
        code: '5 + 30 * 20 / 10',
        answer: ['65.0', '64.0', '63.0', '66.0'],
    },
    {
        id: 2,
        question: 'Giá trị được in ra khi thực thi đoạn mã sau:',
        code: 'fred = 200\njohn = fred\nprint( john)',
        answer: ['john', 'fred', '"john"', '200'],
    },
    {
        id: 3,
        question: 'Giá trị được in ra khi thực thi đoạn mã sau:',
        code: 'found_coins = 20\nmagic_coins = 10\nstolen_coins = 3\nmagic_coins = 13\nprint(found_coins + magic_coins * 365 - stolen_coins * 52)',
        answer: ['20', '3514', '52', '4661'],
    },
    {
        id: 4,
        question: 'Đâu là một chuỗi đúng trong Python',
        answer: [
            "'He said, \"Aren't can't shouldn't wouldn't\".'",
            '"He said, "Aren\'t can\'t shouldn\'t wouldn\'t"."',
            "'''He said, \"Aren't can't shouldn't wouldn't\".''' ",
            "\"He said, \"Aren't can't shouldn't wouldn't\".'",
        ],
    },

    {
        id: 5,
        question: 'Kết quả được in ra sau khi thực thi đoạn mã:',
        code: "list1 = [1, 2, 3, 4]\nlist2 = ['I', 'tripped', 'over']\nprint(list1 + list2)",
        answer: ['[1, 2, 3, 4]', "['I', 'tripped', 'over']", 'Error', "[1, 2, 3, 4, 'I', 'tripped', 'over']"],
    },
    {
        id: 6,
        question: 'Cho 1 tuple như bên dưới,giá trị của fibs[3] là',
        code: 'fibs = (0, 1, 2, 3)',
        answer: ['0', '1', '2', '3'],
    },
    {
        id: 7,
        question: 'Module turtle trong python có tác dụng gì?',
        answer: [
            'Dùng để vẽ các điểm, đường thẳng, đường cong',
            'Dùng để tính toán với số nguyên',
            'Dùng để đọc file',
            'Dùng để kết nối internet',
        ],
    },
    {
        id: 8,
        question: ' Câu lệnh nào dùng để thêm module turtle vào chương trình python?',
        answer: ['#include "turtle"', 'using turtle', 'open turtle', 'import turtle'],
    },
    {
        id: 9,
        question: 'Ta có một biến t = turtle.Pen(). Câu lệnh nào dùng để di chuyển mũi tên di chuyển tới 50 điểm ảnh?',
        answer: ['t.goAhead(50)', 't.walk(50)', 't.move(50)', 't.forward(50)'],
    },
    {
        id: 10,
        question: ' Giá trị được in ra khi thực thi đoạn mã sau:',
        code: "age = 10\nif age > 10: \n   print('You are to old for my joke!')",
        answer: ['You are to old for my joke!', "'You are to old for my joke!'", 'Không có gì được in ', '10'],
    },
    {
        id: 11,
        question: 'Giá trị được in ra khi thực thi đoạn mã sau:',
        code: "age = 12\nif age == 12: \n   print('A pig fell in the mud!')\nelse:\n   print('Shh. It's a secret.')",
        answer: ['A pig fell in the mud!', "Shh. It's a secret.", '12', 'Không có gì được in'],
    },
    {
        id: 12,
        question: 'Giá trị được in ra khi thực thi đoạn mã sau:',
        code: 'myval = None\nprint(myval)',
        answer: ['Không có gì được in', 'None', "'None'", 'myval'],
    },
    {
        id: 13,
        question: 'Đoạn mã nào dùng để in ra màn hình 5 dòng hello liên tiếp?',
        answer: [
            "if i == 5:\n     print('hello')",
            "for i in range(0, 5): (*)\n         print('hello')",
            "print('hello', 'hello', 'hello', 'hello')",
            'Không có đáp án nào đúng',
        ],
    },
    {
        id: 14,
        question: 'Giá trị được in sau khi thực thi đoạn mã:',
        code: "hugehairpaints = ['huge', 'hair', 'paints']\nfor i in hugehairpaints:\n    print(i)",
        answer: ["['huge', 'hair', 'paints']", 'hugehairpaints', 'i\ni\ni', 'huge\nhair\npaints'],
    },
    {
        id: 15,
        question: 'Đoạn code sau dùng để làm gì?',
        code: "for x in range(0, 20):\n    print('%s' % x)\n    if x < 9:\n        break",
        answer: [
            'In ra màn hình các số nguyên từ 0 - 20',
            'In ra màn hình các số nguyên từ 0 - 19',
            'In ra màn hình các số nguyên từ 0 - 9',
            'In ra màn hình số 0',
        ],
    },
    {
        id: 16,
        question: 'Giá trị được in sau khi thực thi đoạn mã:',
        code: 'print(list(range(0, 5)))',
        answer: ['[0,1,2,3,4]', 'range(5)', 'list(range(0, 5))', '[0,1,2,3,4,5]'],
    },
    {
        id: 17,
        question: 'testfunc trong đoạn mã dưới là gì?',
        code: "def testfunc(myname):\n    print('hello %s' % myname)",
        answer: [
            'Một biến kiểu string tên là testfunc',
            'Một đoạn mã vô nghĩa',
            'Một hàm có tên là testfunc',
            'Không có đáp án nào đúng',
        ],
    },
    {
        id: 18,
        question: 'Giá trị được in sau khi thực thi đoạn mã:',
        code: "def testfunc(myname):\n    print('hello %s' % myname)\ntestfunc('Mary')",
        answer: ['Không có gì được in ra', 'hello Mary', 'hello CPP team', 'print(hello Mary)'],
    },
    {
        id: 19,
        question: 'Đâu là khai báo 1 class trong Python:',
        answer: [
            'class Things:\n    pass',
            'def Things:\n    pass',
            'func Things:\n    pass',
            'class Things():\n    pass',
        ],
    },
    {
        id: 20,
        question: 'Cho sẵn class Things, khai báo nào là class con của Things?',
        answer: ['class ChildOfThing:', 'class ChildOfThings:', 'class Things:', 'class Animate(Things):'],
    },
    {
        id: 21,
        question: 'Giá trị được in sau khi thực thi đoạn mã:',
        code: "class Animals:\n    def move(self):\n        print('moving')\n    def breathe(self):\n        print('breathing')\nclass Mammals(Animals):\n    pass\nm = Mammals()\nm.move()",
        answer: ['Error', 'Không có gì được in', 'moving', 'breathing'],
    },
    {
        id: 22,
        question: 'Trong python hàm abs(n) trả về gì?',
        answer: ['2n', '1 số ngẫu nhiên từ 1 - n', '1 list n phần tử', 'Giá trị tuyệt đối của số n'],
    },
    {
        id: 23,
        question: 'Dòng nào in ra màn hình kết quả là False',
        answer: ['print(0)', 'print(bool(0))', 'print(bool(-500))', "print(bool('False'))"],
    },
    {
        id: 24,
        question: 'Giá trị được in sau khi thực thi đoạn mã:',
        code: 'numbers = [5, 4, 10, 30, 22]\nprint(max(numbers))',
        answer: ['5', '7', '50', '30'],
    },
    {
        id: 25,
        question: 'Giá trị được in sau khi thực thi đoạn mã:',
        code: "import keyword\nprint(keyword.iskeyword('if'))",
        answer: ['True', 'False', 'if', 'Error'],
    },
    {
        id: 26,
        question: 'Module hỗ trợ tạo số ngẫu nhiên trong python',
        answer: ['random', 'randit', 'ran', 'Không có đáp án nào đúng'],
    },
    {
        id: 27,
        question: 'Câu lệnh in ra version python đang dùng?',
        answer: ['print(sys.version)', 'print(pip.version)', 'print(python.version)', 'print(current.version)'],
    },
    {
        id: 28,
        question: 'Cho biến t = turtle.Pen(). Hàm nào để vẽ hình tròn?',
        answer: ['t.circle(10)', 't.drawCircle(10)', 't.round(10)', 'Không có đáp án nào đúng'],
    },
    {
        id: 29,
        question: 'Cho biến t = turtle.Pen(). Hàm nào để cài đặt màu vàng?',
        answer: ['t.color(1,0,1)', 't.color(1,1,1)', 't.color(1,0,0)', 't.color(1,1,0)'],
    },
    {
        id: 30,
        question: 'Cho biến t = turtle.Pen(). Hàm nào bắt đầu việc tô màu:',
        answer: ['t.start_color()', 't.begin_color()', 't.begin_fill()', 't.start_fill()'],
    },
];
const correctAnswer = [0, 3, 3, 2, 3, 2, 0, 3, 3, 2, 0, 1, 1, 3, 3, 0, 2, 2, 0, 3, 2, 3, 1, 3, 0, 0, 0, 0, 3, 2];
const QuizzPage = () => {
    const [optionAnswer, setOptionAnwser] = useState(-1);
    const [answerArr, setAnswerArr] = useState([]);
    const [slideNumber, setSlideNumber] = useState(0);
    const [enableButton, setEnableButton] = useState(false);
    const [result, setResult] = useState([]);
    const carouselRef = useRef();
    const handleNextButton = (type = 'continue') => {
        if (slideNumber === questions.length) {
            return;
        } else {
            carouselRef.current.next();
            setAnswerArr([...answerArr, optionAnswer]);
            setOptionAnwser(-1);
            setSlideNumber(slideNumber + 1);
            setEnableButton(false);
            if (type === 'skip') {
                setResult([...result, 0]);
            } else {
                setResult([...result, correctAnswer[slideNumber] === optionAnswer ? 1 : 0]);
            }
        }
    };
    console.log(result);
    const handleCloseButton = () => {
        console.log(answerArr);
    };
    return (
        <>
            <Helmet>
                <title> Quizz</title>
            </Helmet>
            <div className={styles.main}>
                <div className={styles.content}>
                    <div className={styles.quizzWrapper}>
                        <Carousel ref={carouselRef} dots={false}>
                            {questions.map((question) => {
                                return (
                                    <div key={question.id}>
                                        <Row className={styles.question}>
                                            <p>{question.question}</p>
                                        </Row>
                                        <Row className={styles.answer}>
                                            {question.code && (
                                                <Col span={12} style={{ display: 'flex' }}>
                                                    <pre>{question.code}</pre>
                                                </Col>
                                            )}
                                            <Col span={12}>
                                                {question.answer.map((val, idx) => {
                                                    return (
                                                        <Row
                                                            key={idx}
                                                            className={clsx([
                                                                styles.itemOption,
                                                                {
                                                                    [styles.itemOptionActive]: optionAnswer === idx,
                                                                },
                                                            ])}
                                                            onClick={() => {
                                                                setOptionAnwser(idx);
                                                                setEnableButton(true);
                                                            }}
                                                        >
                                                            {val}
                                                        </Row>
                                                    );
                                                })}
                                            </Col>
                                        </Row>
                                    </div>
                                );
                            })}
                            <div className={styles.thanksContainer}>CẢM ƠN BẠN ĐÃ LÀM BÀI KHẢO SÁT</div>
                        </Carousel>
                        <div className={clsx(styles.actionButtonWrappper)}>
                            <Row justify={'space-around'} align={'middle'} style={{ height: '100%' }}>
                                <Col span={5}>
                                    <button
                                        className={clsx([styles.actionButton, styles.skipButton])}
                                        span={5}
                                        onClick={() => handleNextButton('skip')}
                                    >
                                        <p>BỎ QUA</p>
                                    </button>
                                </Col>
                                {slideNumber !== questions.length && (
                                    <button
                                        className={clsx(
                                            styles.actionButton,
                                            {
                                                [styles.disableButton]: !enableButton,
                                            },
                                            {
                                                [styles.checkButton]: enableButton,
                                            },
                                        )}
                                        span={5}
                                        onClick={handleNextButton}
                                        disabled={!enableButton}
                                    >
                                        <p>TIẾP TỤC</p>
                                    </button>
                                )}
                                {slideNumber === questions.length && (
                                    <Link
                                        className={clsx(
                                            styles.actionButton,
                                            {
                                                [styles.disableButton]: false,
                                            },
                                            {
                                                [styles.checkButton]: true,
                                            },
                                        )}
                                        span={5}
                                        disabled={false}
                                        onClick={handleCloseButton}
                                        to={'/'}
                                    >
                                        ĐÓNG
                                    </Link>
                                )}
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default QuizzPage;
