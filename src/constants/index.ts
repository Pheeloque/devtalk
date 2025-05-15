import { Video, Calendar, Users, Terminal } from "lucide-react";

export const INTERVIEW_CATEGORY = [
  { id: "upcoming", title: "Предстоящие", variant: "outline" },
  { id: "completed", title: "Завершенные", variant: "secondary" },
  { id: "succeeded", title: "Успешные", variant: "default" },
  { id: "failed", title: "Проваленные", variant: "destructive" },
] as const;

export const TIME_SLOTS = [
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
];

export const QUICK_ACTIONS = [
  {
    icon: Terminal,
    engTitle: "New Call",
    title: "Начать",
    description: "Создайте новую встречу",
    color: "green-500",
    gradient: "from-green-500/20 via-green-500/10 to-green-500/5",
  },
  {
    icon: Users,
    engTitle: "Join Interview",
    title: "Присоединиться",
    description: "Войдите в звонок по ссылке",
    color: "red-500",
    gradient: "from-red-500/20 via-red-500/10 to-red-500/5",
  },
  {
    icon: Calendar,
    engTitle: "Schedule",
    title: "Календарь",
    description: "Планируйте предстоящие собеседования",
    color: "sky-500",
    gradient: "from-sky-500/20 via-sky-500/10 to-sky-500/5",
  },
  {
    icon: Video,
    engTitle: "Recordings",
    title: "Записи",
    description: "Просмотрите прошедшие собеседования",
    color: "amber-500",
    gradient: "from-amber-500/20 via-amber-500/10 to-amber-500/5",
  },
];

export const CODING_QUESTIONS: CodeQuestion[] = [
  {
    id: "two-sum",
    title: "Сумма двух чисел",
    description:
      "Дан массив целых чисел `nums` и целое число `target`. Найдите индексы двух чисел в массиве, которые в сумме дают `target`.\n\nГарантируется, что существует ровно одно решение, и один элемент нельзя использовать дважды.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "nums[0] + nums[1] = 9, поэтому возвращаем [0, 1]",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
    ],
    starterCode: {
      javascript: "function twoSum(nums, target) {\n  // Напишите решение здесь\n  \n}",
      typescript: "function twoSum(nums: number[], target: number): number[] {\n  // Напишите решение здесь\n  \n}",
      python: "def two_sum(nums, target):\n    # Напишите решение здесь\n    pass",
      java: "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Напишите решение здесь\n        \n    }\n}",
      cpp: "std::vector<int> twoSum(std::vector<int>& nums, int target) {\n    // Напишите решение здесь\n    \n}",
      csharp: "public int[] TwoSum(int[] nums, int target) {\n    // Напишите решение здесь\n    \n}",
      php: "function twoSum($nums, $target) {\n    // Напишите решение здесь\n    \n}",
      swift: "func twoSum(_ nums: [Int], _ target: Int) -> [Int] {\n    // Напишите решение здесь\n    \n}",
      go: "func twoSum(nums []int, target int) []int {\n    // Напишите решение здесь\n    \n}",
    },
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Существует ровно одно правильное решение",
    ],
  },
  {
    id: "reverse-string",
    title: "Перевернуть строку",
    description:
      "Напишите функцию, которая переворачивает строку. Строка задана как массив символов `s`.\n\nНеобходимо изменить массив на месте, используя O(1) дополнительной памяти.",
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    starterCode: {
      javascript: "function reverseString(s) {\n  // Напишите решение здесь\n  \n}",
      typescript: "function reverseString(s: string[]): void {\n  // Напишите решение здесь\n  \n}",
      python: "def reverse_string(s):\n    # Напишите решение здесь\n    pass",
      java: "class Solution {\n    public void reverseString(char[] s) {\n        // Напишите решение здесь\n        \n    }\n}",
      cpp: "void reverseString(std::vector<char>& s) {\n    // Напишите решение здесь\n    \n}",
      csharp: "public void ReverseString(char[] s) {\n    // Напишите решение здесь\n    \n}",
      php: "function reverseString(&$s) {\n    // Напишите решение здесь\n    \n}",
      swift: "func reverseString(_ s: inout [Character]) {\n    // Напишите решение здесь\n    \n}",
      go: "func reverseString(s []rune) {\n    // Напишите решение здесь\n    \n}",
    },
  },
  {
    id: "palindrome-number",
    title: "Число-палиндром",
    description:
      "Дано целое число `x`. Верните `true`, если число является палиндромом, и `false` в противном случае.\n\nПалиндромом считается число, которое читается одинаково слева направо и справа налево.",
    examples: [
      {
        input: "x = 121",
        output: "true",
        explanation: "121 читается одинаково в обоих направлениях",
      },
      {
        input: "x = -121",
        output: "false",
        explanation: "Слева направо: -121, справа налево: 121-",
      },
    ],
    starterCode: {
      javascript: "function isPalindrome(x) {\n  // Напишите решение здесь\n  \n}",
      typescript: "function isPalindrome(x: number): boolean {\n  // Напишите решение здесь\n  \n}",
      python: "def is_palindrome(x):\n    # Напишите решение здесь\n    pass",
      java: "class Solution {\n    public boolean isPalindrome(int x) {\n        // Напишите решение здесь\n        \n    }\n}",
      cpp: "bool isPalindrome(int x) {\n    // Напишите решение здесь\n    \n}",
      csharp: "public bool IsPalindrome(int x) {\n    // Напишите решение здесь\n    \n}",
      php: "function isPalindrome($x) {\n    // Напишите решение здесь\n    \n}",
      swift: "func isPalindrome(_ x: Int) -> Bool {\n    // Напишите решение здесь\n    \n}",
      go: "func isPalindrome(x int) bool {\n    // Напишите решение здесь\n    \n}",
    },
  },
  {
    id: "valid-parentheses",
    title: "Правильные скобки",
    description:
      "Дана строка `s`, содержащая только символы '(', ')', '{', '}', '[' и ']', определите, является ли последовательность скобок правильной.\n\nПравильная последовательность должна удовлетворять:\n1. Открытые скобки должны быть закрыты в правильном порядке\n2. Каждая открытая скобка имеет соответствующую закрытую",
    examples: [
      {
        input: 's = "()"',
        output: "true",
        explanation: "Скобки закрыты в правильном порядке",
      },
      {
        input: 's = "([)]"',
        output: "false",
        explanation: "Нарушен порядок закрытия скобок",
      },
    ],
    starterCode: {
      javascript: "function isValid(s) {\n  // Напишите решение здесь\n  \n}",
      typescript: "function isValid(s: string): boolean {\n  // Напишите решение здесь\n  \n}",
      python: "def is_valid(s):\n    # Напишите решение здесь\n    pass",
      java: "class Solution {\n    public boolean isValid(String s) {\n        // Напишите решение здесь\n        \n    }\n}",
      cpp: "bool isValid(string s) {\n    // Напишите решение здесь\n    \n}",
      csharp: "public bool IsValid(string s) {\n    // Напишите решение здесь\n    \n}",
      php: "function isValid($s) {\n    // Напишите решение здесь\n    \n}",
      swift: "func isValid(_ s: String) -> Bool {\n    // Напишите решение здесь\n    \n}",
      go: "func isValid(s string) bool {\n    // Напишите решение здесь\n    \n}",
    },
  },
  {
    id: "max-subarray",
    title: "Максимальный подмассив",
    description:
      "Найдите непрерывный подмассив (содержащий хотя бы один элемент) с наибольшей суммой и верните эту сумму.",
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "Подмассив [4,-1,2,1] имеет максимальную сумму 6",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
      },
    ],
    starterCode: {
      javascript: "function maxSubArray(nums) {\n  // Напишите решение здесь\n  \n}",
      typescript: "function maxSubArray(nums: number[]): number {\n  // Напишите решение здесь\n  \n}",
      python: "def max_sub_array(nums):\n    # Напишите решение здесь\n    pass",
      java: "class Solution {\n    public int maxSubArray(int[] nums) {\n        // Напишите решение здесь\n        \n    }\n}",
      cpp: "int maxSubArray(vector<int>& nums) {\n    // Напишите решение здесь\n    \n}",
      csharp: "public int MaxSubArray(int[] nums) {\n    // Напишите решение здесь\n    \n}",
      php: "function maxSubArray($nums) {\n    // Напишите решение здесь\n    \n}",
      swift: "func maxSubArray(_ nums: [Int]) -> Int {\n    // Напишите решение здесь\n    \n}",
      go: "func maxSubArray(nums []int) int {\n    // Напишите решение здесь\n    \n}",
    },
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
  },
];

export const LANGUAGES = [
  { id: "javascript", name: "JavaScript", icon: "/javascript.png" },
  { id: "typescript", name: "TypeScript", icon: "/typescript.png" },
  { id: "python", name: "Python", icon: "/python.png" },
  { id: "java", name: "Java", icon: "/java.png" },
  { id: "cpp", name: "C++", icon: "/cpp.png" },
  { id: "csharp", name: "C#", icon: "/csharp.png" },
  { id: "php", name: "PHP", icon: "/php.png" },
  { id: "swift", name: "Swift", icon: "/swift.png" },
  { id: "go", name: "Go", icon: "/go.png" },
] as const;

export interface CodeQuestion {
  id: string;
  title: string;
  description: string;
  examples: Array<{
    input: string;
    output: string;
    explanation?: string;
  }>;
  starterCode: {
    javascript: string;
    typescript: string;
    python: string;
    java: string;
    cpp: string;
    csharp: string;
    php: string;
    swift: string;
    go: string;
  };
  constraints?: string[];
}

export type QuickActionType = (typeof QUICK_ACTIONS)[number];
