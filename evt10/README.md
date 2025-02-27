# ХИМОРОДА ВАЛЕРИЯ СЕРГЕЕВНА
<div style="display: flex; align-items: flex-start;">
    <img src="lerikk.jpg" alt="Ava" width="200">
</div>

| **Контактная информация** |
|---------------------------|
| E-mail: [valeriahimoroda@gmail.com]  |
| Github: [yalerikk] |
| Telegram: [лера] |
| Phone: +375-44-545-83-69 |

## Обо мне
Студентка 3-го курса БГУИР. Писала на **Java** и **JavaScript**. Имею опыт разработки веб-приложений и работы с базами данных **SQL**. *Моя цель* – найти практику в области
программирования для получения практического и проффесионального опыта.

## Навыки
- Достигла уровня *Intermediate (B1)* в английском языке;
- Хорошо усвоила принципы *ООП*;
- Создала учебные/тестовые проекты в портфолио на *GitHub*;
- Изучила *Git* и знаю как с ним работать.

## Стек технологий
| Языки программирования        | Базы данных           | Инструменты и библиотеки  |
| ------------- |:-------------:| -----:|
| Java, JavaScript      | SQL  | JavaFX, Git, Express,   |
| Python      | MySQL      |   React, Node.js, Postman,  XML, |
| HTML, CSS | PostgreSQL      |  JWT Token, Pandas, NumPy   |

## Пример кода
Problem: **[Palindrome Number](https://leetcode.com/problems/palindrome-number)**.<br>
Description: Given an integer `x`, return `true` *if* `x` *is a __palindrome__*, *and* `false` *otherwise*.
```java
import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sca = new Scanner(System.in);
        System.out.print("Введите число: ");
        int x = sca.nextInt();

        if (isPalindrome(x)) {
            System.out.println("Число " + x + " является палиндромом.");
        } else {
            System.out.println("Число " + x + " не является палиндромом.");
        }
    }

    public static boolean isPalindrome(int number) {
        int origNumber = number; // копия оригинального числа, переданного в качестве аргумента
        int reversedNumber = 0; // переменная, в которую мы будем сохранять перевернутое число
        int remainingNumber = number; // копия оригинального числа, которую мы будем использовать для обработки

        while (remainingNumber > 0) {
            int digit = remainingNumber % 10; // получаем последнюю цифру числа
            reversedNumber = reversedNumber * 10 + digit; // добавляем эту цифру в reversedNumber,
                                                          // умножая его на 10 и прибавляя к нему текущую цифру.
            remainingNumber /= 10; // удаляем последнюю цифру
        } // reversedNumber содержит перевернутое число

        return origNumber == reversedNumber;
    }
}
```

## Образование
> Неоконченное высшее

__Белорусский государственный университет информатики
и радиоэлектроники, Минск__<br>
Инженерно-психологическое обеспечение информационных
технологий, Факультет компьютерного проектирования<br>
*2022 - настоящее время*

__Государственное учреждение образования "Лицей № 1 г.
Минска"__<br>
Физико-математический класс<br>
*2020 - 2022*

## Достижения
- Участница хакатона "FCADHACK" (2024, в партнерстве с Т-Банк);
- Публикация научной работы *["Человек в автоматизированных системах управления"](https://libeldoc.bsuir.by/handle/123456789/57027)* в сборнике материалов 60-й научной конференции БГУИР (2024);
- Проекты *[“Автоматизация услуг мастера пирсинга”](https://github.com/yalerikk/kurs_piercing)* и *[“Программное средство для автоматизации деятельности фитнес-клуба”](https://github.com/yalerikk/oopipFitnessClub)*.

## Курсы
1. Java Syntax Pro от JavaRush;
2. Наиль Алишев Практика для начинающих в Java;
3. Git How To – изучены основы Git и GitHub.

## Языки
Russian - *Native*<br>
English - *Intermediate*

[valeriahimoroda@gmail.com]: https://mail.google.com/mail/u/1/#inbox
[yalerikk]: https://github.com/yalerikk
[лера]: https://t.me/ruspeedick