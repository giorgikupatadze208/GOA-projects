

"N1"
"კლასის მეთოდი არის მეთოდი, რომელიც დაკავშირებულია კლასთან და არა ინდივიდუალურ ობიექტტან"
"შესაძლებელია შეიცვალოს კლასის მდგომარეობა რომელიც მოქმედებს ასევტქვატ ყველა კლასის ობიექტზე"
"და კლასს მეთოდი არის პაითონში"

"N2"
"static method) არის მეთოდი, რომელიც არც კლასს უკავშირდება, არც ინდივიდუალურ ობიექტს."
"სტატიკური მეთოდი არ იღებს არა self და არც cls არგუმენტებს. იგი შეიძლება გამოყენებულ იქნას"
"როგორც კლასის მეთოდი, მაგრამ არ აქვს წვდომა არც კლასის ცვლადებზე და არც ინდივიდუალურ ობიექტებზე."






import java.util.Arrays;
public class Main {
    public static void main(String[] args) {
        int[] myArray = {10, 20, 30, 40, 50, 60, 70, 80, 90, 100};

        int[] slice1 = Arrays.copyOfRange(myArray, 0, 5);
        System.out.println("First slice: " + Arrays.toString(slice1))
        int[] slice2 = Arrays.copyOfRange(myArray, 3, 7);
        System.out.println("Second slice: " + Arrays.toString(slice2));
        int[] slice3 = getEverySecondElement(myArray);
        System.out.println("Third slice: " + Arrays.toString(slice3));
    }
    public static int[] getEverySecondElement(int[] array) {
        int size = (array.length + 1) / 2;
        int[] result = new int[size];
        for (int i = 0, j = 0; i < array.length; i += 2, j++) {
            result[j] = array[i];
        }
        return result;
    }
}

