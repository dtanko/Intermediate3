//Question 1
//Using the constructor method, create an InstagramPost() constructor function that takes the properties below as arguments.
function InstagramPost(handleOfAuthor, content, image_link, views, likes) {
    this.HandleOfAuthor = handleOfAuthor;
    this.Contents = content;
    this.ImageLink = image_link;
    this.NumberOfVIEWS = views;
    this.NumberOfLIKES = likes;
}


//Question 2
//Create 2 Instagram post objects from the constructor function you created above

let InstagramPost_1 = new InstagramPost ('@tanko', 'Education a Key', 'www.tanko/img.ng', 50, 109);
console.log(InstagramPost_1)

let InstagramPost_2 = new InstagramPost ('@david', 'The next Wave', 'www.david/img.ng', 150, 209);
console.log(InstagramPost_1)

//Question 3
//Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki, Lagos State. Recently, he wrote the JAMB exam and had the following scores in his combination:
// ENG - 70
// GOVT - 85
// LIT - 82
// CRK - 94

//a.  Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments. Afterwards, create an object representing Musa from the factory function. 

function createPerson(Name, Age, Location){
    return{
        Name : Name,
        Age : Age,
        Location: Location,
    }
}
const MUSA = createPerson('Musa', 21, 'Abuja')
console.log(MUSA)

//b.  Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. Then create an object representing Muse’s JAMB scores. Add the object as a property to Musa object you created above in (a) above


function JambScores(eng, govt, lit, crk){
    return{
        ENG : eng,
        GOVT : govt,
        LIT : lit,
        CRK : crk
        }
    }

const MUSAJambScores = JambScores(70, 85, 82, 94)
console.log(MUSAJambScores)


//4.  What are the different ways you can clone an object? Give examples for each of them.
/**We have Shallow cloning and deep cloning.
 * Shallow copy is the method of copying an object and is followed by default in cloning. In this method, the fields of an old object X are copied to the new object Y. While copying the object type field the reference is copied to Y i.e object Y will point to the same location as pointed out by X. 
 * If the field value is a primitive type it copies the value of the primitive type.
 * example of shallow clonong:
 * //code illustrating shallow copy
public class Ex {

	private int[] data;

	// makes a shallow copy of values
	public Ex(int[] values) {
		data = values;
	}

	public void showData() {
		System.out.println( Arrays.toString(data) );
	}
}

A deep copy copies all fields and makes copies of dynamically allocated memory pointed to by the fields. 
A deep copy occurs when an object is copied along with the objects to which it refers.
Example:
// A Java program to demonstrate
// deep copy using clone()

// An object reference of this
// class is contained by Test2
class Test {
	int x, y;
}

// Contains a reference of Test and
// implements clone with deep copy.
class Test2 implements Cloneable {
	int a, b;

	Test c = new Test();

	public Object clone() throws CloneNotSupportedException
	{
		// Assign the shallow copy to
		// new reference variable t
		Test2 t = (Test2)super.clone();

		// Creating a deep copy for c
		t.c = new Test();
		t.c.x = c.x;
		t.c.y = c.y;

		// Create a new object for the field c
		// and assign it to shallow copy obtained,
		// to make it a deep copy
		return t;
	}
}

public class Main {
	public static void main(String args[])
		throws CloneNotSupportedException
	{
		Test2 t1 = new Test2();
		t1.a = 10;
		t1.b = 20;
		t1.c.x = 30;
		t1.c.y = 40;

		Test2 t3 = (Test2)t1.clone();
		t3.a = 100;

		// Change in primitive type of t2 will
		// not be reflected in t1 field
		t3.c.x = 300;

		// Change in object type field of t2 will
		// not be reflected in t1(deep copy)
		System.out.println(t1.a + " " + t1.b + " " + t1.c.x
						+ " " + t1.c.y);
		System.out.println(t3.a + " " + t3.b + " " + t3.c.x
						+ " " + t3.c.y);
	}
}
**
*/

//Question 5
//Using any of the enumeration methods taught in class (for…in  or for..of), log out each of the presidential candidates in this format:
//	’Omoyele Sowore is the presidential candidate of AAC’
 
const presidentialCandidate = {
    AAC : 'Omoyele Sowore',
    ACCORD : 'christopher Imumolen',
    APC : 'Bola Ahmed Tinubu',
    LP : 'Peter Obi',
    NNPP : 'Rabiu Kwankwaso',
    PDP : 'Atiku Abubakar'
};

//enumaration method - For..in
for (const party in presidentialCandidate) {
    console.log( '${presidentialCandidate[party]} is the presidential candidate of ${party}')
}
//enumeration methods - For..of
for (let [party, candidate] of Object.entries(presidentialCandidate)){
    console.log('${candidates} is the presidential candidate of ${party}')
}
