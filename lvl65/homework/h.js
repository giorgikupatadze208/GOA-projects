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

