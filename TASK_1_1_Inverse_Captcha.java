import static java.lang.System.out;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class TASK_1_1_Inverse_Captcha {
public static void main(String[] args) {
	
		Integer ary[]= {1,1,2,2,1},len=ary.length;
		int result =IntStream.range(0,len).map((i)->{
			return (i!=len-1)?(ary[i]==ary[i+1])?ary[i]:0:0;
		}).reduce(Integer::sum).getAsInt()+(ary[0]==ary[len-1]?ary[0]:0);
		out.println(result);
		}
	
}
