import java.util.Arrays;
import java.util.List;
import java.util.TreeSet;
import java.util.stream.IntStream;
import java.util.stream.Stream;
import static java.lang.System.out;
public class Task_2_1Corruption_Checksum {

	public static void main(String[] args) {
		
		Integer ary[][] = {{5 ,1, 9 ,5},{7, 5 ,3},{2 ,4 ,6 ,8}};
		
		int result=Stream.of(ary).mapToInt((obj)->{
			TreeSet<Integer[]> set=new TreeSet();
			List list=Arrays.asList(obj);
			set.addAll(list);
			return (Integer.parseInt(""+set.last())-Integer.parseInt(""+set.first()));
		}).reduce(Integer::sum).getAsInt();
		
		out.println(result);
		
	}
	
	
	
}
