/**
* Here are a few things I found interesting after reading chapter 1 in `Algorithms`.
* Book: Algorithms (4th Edition) [Hardcover]
  Robert Sedgewick (Author), Kevin Wayne (Author)
* URL: http://www.amazon.com/Algorithms-4th-Edition-Robert-Sedgewick/dp/032157351X/ref=sr_1_1?ie=UTF8&qid=1376670368&sr=8-1&keywords=algorithms+4
*/
class testNumbers{
	public static void main(String[]args) {
		System.out.println( 'a' + 'c' == 196 );
		System.out.println( (char)('c' + ('c' - 'a')) == 'e' );
		System.out.println( (1 + 2 + 'c') == 102 );
		System.out.println( ( 1 + 2 + "c" ) == "3c" );
		System.out.println( (1.0/0.0) == Double.POSITIVE_INFINITY );
		try{
			System.out.println( (1/0) );
		}catch(Exception e){ 
			System.out.println( e );
		}
	}
}
