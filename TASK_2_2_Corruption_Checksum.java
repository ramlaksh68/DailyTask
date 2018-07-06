import static java.lang.System.out;
import static java.util.stream.Collectors.*;
import static java.lang.Integer.*;
import java.util.Optional;
import java.util.OptionalInt;
import java.util.Set;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class TASK_2_2_Corruption_Checksum {
public static void main(String[] args) {
		Integer ary[][] ={{5, 9, 2, 8},
			{9 ,4 ,7 ,3},
			{3 ,8, 6, 5}};

		int resultout =Stream.of(ary).mapToInt((obj) -> {
		Optional opt=Stream.of(obj).flatMap((data) -> {
				return IntStream.range(0, obj.length).filter(no -> {
					int max = max(obj[no], data), min = min(obj[no], data);
					return (max% min == 0&&obj[no]!=data) ;
				}).mapToObj(i->obj[i]);
			}).reduce((a, b) -> max(a, b)/min(b, a));
		return opt.isPresent()?(int) opt.get():0;
		}).reduce(Integer::sum).getAsInt();
		out.print(resultout);
	
	
	}
	
	
	
}
