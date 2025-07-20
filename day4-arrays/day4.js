    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = [
      'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
      'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
      'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
      'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
      'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    const oldInventors = inventors.filter(function(array) {
        return (array.year - 1500 < 100 && array.year - 1500 > 0); 
    });

    console.table(oldInventors); 

    /*SOLUTION
    - using conditionals

    function(inventor {
      if (inventor.year >= 1500 && inventor.year < 1600) {
        return true; (keep element)
      } else {
        return false
      }  
    });
    
    - arrow notation
    const oldInventors = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600))
    */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names

    const namesArray = inventors.map(function(array) {
        return {first: array.first, last: array.last};
    });
    
    console.table(namesArray);

    /* SOLUTION 
    const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
    */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest

    const ordered = inventors.sort((arr1, arr2) => arr1.year-arr2.year);
    console.table(ordered); 

    /*SOLUTION
    const ordered = inventors.sort(function(a,b) {
      if (a.year > b.year) {
        return 1;
      } else {
        return -1;  
      }
    });
    - a,b bubble down in array (bubble sort?)

    const ordered = inventors.sort((a,b) => a.year > b.year ? 1 : -1);

    */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?

    const sum = inventors.reduce((acc, cur) => acc + (cur.passed - cur.year), 0);
    console.table(sum);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // 5. Sort the inventors by years lived
    const oldest1 = inventors.sort((arr1, arr2) => (arr2.passed - arr2.year)-(arr1.passed - arr1.year)); 
    console.table(oldest1); 

    /*SOLUTION

    const oldest = inventors.sort(function(a, b) {
      const lastGuy = a.passed - a.year;
      const nextGuy = b.passed - b.year;
     
      return lastGuy > nextGuy ? -1 : 1;

    });

    console.table(oldest); 
    */
    
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    document =  'https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris'

    //SOLUTION
    //you can call query selector on any existing dom element
    const category = document.querySelector('.mw-category');
    //you can look inside of dom element

    //querySelector returns a Node List, but map, filter, sort etc work on arrays
    //need to convert Node List into an array
    //use spread to spread every item into an array
    //spread will take every item out of an iterable (Node List) and put it into the containing array
    //const links = Array.from(category.querySelectorAll('a')); also works
    
    const links = [...category.querySelectorAll('a')];
    //convert list of links to a list of names
    //filter list of names 

    const de = links
          .map(link => link.textContent)
          .filter(streetName => streetName.includes('de'));

    console.log(de);
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // 7. sort Exercise
    // Sort the people alphabetically by last name
    //SOLUTION

    const sorted = people.sort();
    console.table(sorted);

    const alph = people.sort(function(a, b) {      
      const [aLast, aFirst] = a.split(', '); //'Bernhard, Sandra' -> [Bernhard, Sandra]
      const [bLast, bFirst] = b.split(', ')
      return aLast < bLast ? -1 : 1; 
    });
    
    console.table(alph); 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    //solution
    //start with blank object
    //every time you loop over one, see if it's already in object
    const transportation = data.reduce(function(obj, item) {
      if (!obj[item]) {
        obj[item]=0;
      }
      obj[item]++;
      return obj; 
    }, {});

    console.log(transportation); 
