// var data = {
//   'Sci-Fi': ['The Hunger Games', 'Never Let Me Go', 'The Host', 'The Hunger Games: Mockingjay - Part 2', 'The Hunger Games: Mockingjay - Part 1', 'Incarceron', 'Children of Men', 'I Am Legend', 'The Time Traveler is Wife', 'The Golden Compass', 'The Hunger Games: Catching Fire', 'A Clockwork Orange'],
//   'Romantic': ['Rifles', 'Fifty Shades of Grey','Great Expectations', 'Serpent Gir', 'Never Let Me Go', 'Få meg på, for faen', 'Submarine', 'The Host', 'The Twilight Saga: Breaking Dawn - Part 1', 'The Twilight Saga: Breaking Dawn - Part 2', 'One for the Money', 'Wicked Lovely', 'The Little Mermaid', 'The Forest of Hands and Teeth', 'Shiver', 'If I Stay', 'Fallen', 'Delirium', 'Beautiful Creatures', 'Beastly', 'A Great and Terrible Beauty', 'Rock of Ages', 'The Sisterhood of the Traveling Pants 2', 'The Sisterhood of the Traveling Pants', 'Brokeback Mountain', 'Walk the Line', 'In Her Shoes', 'Peaceful Warrior', 'The Painted Veil', 'Snow Angels', 'Jane Eyre', 'The Nanny Diaries', 'Silk', 'The Great Debaters', 'P.S. I Love You', 'Miss Pettigrew Lives for a Day', 'Mamma Mia!', 'The Duchess', 'The Curious Case of Benjamin Button', 'Revolutionary Road', 'Confessions of a Shopaholic', 'The Last Station', 'Up in the Air', 'Crazy Heart', 'A Single Man', 'Tamara Drewe', 'Jane Eyre', 'Water for Elephants', 'Atonement', 'Appaloosa', 'Wuthering Heights', 'The Time Traveler is Wife', 'Stardust', 'Persuasion', 'Emma', 'Northanger Abbey', 'Sense and Sensibility', 'Pride & Prejudice', 'The Twilight Saga: Eclipse', 'The Twilight Saga: New Moon', 'Twilight', 'Forrest Gump', 'One Day', 'Nights in Rodanthe', 'The Notebook', 'The Last Song', 'Dear John', 'The Lucky One', 'Message in a Bottle', 'All the Pretty Horses', 'All That Heaven Allows', 'About a Boy', 'A Walk to Remember', 'A Room with a View', 'A Good Year', 'A Little Romance'],
//   'Biography': ['127 Hours', 'Walk the Line', 'The Greatest Game Ever Played', 'Glory Road', 'The Last King of Scotland', 'The Pursuit of Happyness', 'Freedom Writers', 'Into the Wild', 'The Assassination of Jesse James by the Coward Robert Ford', 'Charlie Wilson is War', 'The Great Debaters', 'The Duchess', 'The Express', 'Public Enemies', 'The Soloist', 'The Last Station', 'The Blind Side', 'The Runaways', 'The Social Network', 'Secretariat', 'A Beautiful Mind', 'Awakenings'],
//   'Horror': ['The Mist', 'I Am Legend', 'It', 'Vampire Academy'],
//   'Fantasy': ['Twilight', 'Life of Pi', 'Serpent Gir', 'The Twilight Saga: Breaking Dawn - Part 1', 'The Twilight Saga: Breaking Dawn - Part 2', 'The Chronicles of Narnia: The Silver Chair', 'The Chronicles of Narnia: The Magician is Nephew', 'Paranormalcy', 'Wicked Lovely', 'Vampire Academy', 'The Looking Glass Wars', 'The Little Mermaid', 'Shiver', 'Incarceron', 'If I Stay', 'Firelight', 'Fallen', 'Delirium', 'Beautiful Creatures', 'Beastly', 'Wings', 'A Great and Terrible Beauty', 'The Woman in Black', 'The Spiderwick Chronicles', 'Nim is Island', 'Inkheart', 'The Time Traveler is Wife', 'The Lovely Bones', 'The Lord of the Rings: The Two Towers', 'The Lord of the Rings: The Return of the King', 'The Lord of the Rings: The Fellowship of the Ring', 'The Hobbit: An Unexpected Journey', 'The Chronicles of Narnia: The Voyage of the Dawn Tread', 'The Chronicles of Narnia: Prince Caspian', 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe', 'Stardust', 'Percy Jackson: Sea of Monsters', 'Percy Jackson & the Olympians: The Lightning Thief', 'The Twilight Saga: Eclipse', 'The Twilight Saga: New Moon', 'Harry Potter and the Deathly Hallows: Part 1', 'Harry Potter and the Half-Blood Prince', 'Harry Potter and the Order of the Phoenix', 'Harry Potter and the Prisoner of Azkaban', 'Harry Potter and the Deathly Hallows: Part 2', 'Harry Potter and the Goblet of Fire', 'Harry Potter and the Sorcerer is Stone', 'Harry Potter and the Chamber of Secrets'],
//   'Comedy': ['A Good Year', 'Få meg på, for faen', 'Submarine', 'Barney is Version', 'One for the Money', 'Vampire Academy', 'Rock of Ages', 'Mean Girls', 'The Sisterhood of the Traveling Pants 2', 'The Sisterhood of the Traveling Pants', 'In Her Shoes', 'The Devil Wears Prada', 'The Nanny Diaries', 'Charlie Wilson is War', 'Miss Pettigrew Lives for a Day', 'Nim is Island', 'Mamma Mia!', 'The Women', 'Confessions of a Shopaholic', 'Tamara Drewe', 'Mansfield Park', 'A Little Romance', 'About a Boy'],
//   'Action': ['Rifles', 'Tom Sawyer & Huckleberry Finn', 'The Host', 'The Hunger Games: Mockingjay - Part 2', 'The Hunger Games: Mockingjay - Part 1', 'The Chronicles of Narnia: The Magician is Nephew', 'One for the Money', 'Vampire Academy', 'Jack Reacher', 'Friday Night Lights', 'Poseidon', 'Green Zone', 'The Chronicles of Narnia: Prince Caspian', 'The Green Mile', 'Luftslottet som sprängdes', 'Dear John', 'All the Pretty Horses', 'The Hunger Games: Catching Fire', 'A Clockwork Orange'],
//   'Drama': ['127 Hours', 'Fifty Shades of Grey', 'Life of Pi', 'Great Expectations', 'Never Let Me Go', 'Island', 'Tom Sawyer & Huckleberry Finn', 'Simon och ekarna', 'Gomorra', 'Oranges and Sunshine', 'Submarine', 'Barney is Version', 'The Way Back', 'The Twilight Saga: Breaking Dawn - Part 1', 'The Twilight Saga: Breaking Dawn - Part 2', 'The Forest of Hands and Teeth', 'Incarceron', 'If I Stay', 'Society', 'Fallen', 'Beautiful Creatures', 'Beastly', 'Wings', 'A Great and Terrible Beauty', 'The Woman in Black', 'Rock of Ages', 'Lawless', 'Mean Moms', 'Friday Night Lights', 'Vanity Fair', 'Million Dollar Baby', 'The Magic of Ordinary Days', 'The Sisterhood of the Traveling Pants 2', 'Brokeback Mountain', 'In Her Shoes', 'The Greatest Game Ever Played', 'Glory Road', 'Poseidon', 'Peaceful Warrior', 'The Devil Wears Prada', 'The Last King of Scotland', 'Love is Abiding Joy', '10', 'The Pursuit of Happyness', 'The Painted Veil', 'Children of Men', 'Freedom Writers', 'Snow Angels', 'Jane Eyre', 'Zodiac', 'Saving Sarah Cain', 'The Nanny Diaries', 'Into the Wild', 'Silk', 'The Assassination of Jesse James by the Coward Robert Ford', 'No Country for Old Men', 'Gone Baby Gone', 'Charlie Wilson is War', 'The Great Debaters', 'I Am Legend', 'Love is Unfolding Dream', 'P.S. I Love You', 'Nothing Is Private', 'The Women', '21', 'The Duchess', 'The Express', 'The Secret Life of Bees', 'The Boy in the Striped Pyjamas', 'The Curious Case of Benjamin Button', 'Revolutionary Road', 'Public Enemies', 'Like Dandelion Dust', 'The Soloist', 'The Last Station', 'Up in the Air', 'Crazy Heart', 'A Single Man', 'The Blind Side', 'Winter is Bone', 'The Runaways', 'The Ghost Writer', 'Green Zone', 'Tamara Drewe', 'The Town', 'The Social Network', 'Secretariat', 'Jane Eyre', 'The Lincoln Lawyer', 'Water for Elephants', 'Ballet Shoes', 'Awakenings', 'Atonement', 'Appaloosa', 'We Need to Talk About Kevin', 'Wuthering Heights', 'The Time Traveler is Wife', 'Misery', 'Stand by Me', 'The Shawshank Redemption', 'The Pelican Brief', 'The Lovely Bones', 'The Lord of the Rings: The Two Towers', 'The Lord of the Rings: The Return of the King', 'The Lord of the Rings: The Fellowship of the Ring', 'Emma', 'Persuasion', 'Screen Two: Persuasion', 'Northanger Abbey', 'Mansfield Park', 'Sense and Sensibility', 'Pride & Prejudice', 'The Twilight Saga: Eclipse', 'The Twilight Saga: New Moon', 'Twilight', 'My Sister is Keeper', 'Lord of the Flie', 'Forrest Gump', 'One Day', 'Extremely Loud & Incredibly Clos', 'The Help', 'The Green Mile', 'Luftslottet som sprängdes', 'Ondskan', 'Flickan som lekte med elden', 'Män som hatar kvinnor', 'The Girl with the Dragon Tattoo', 'Nights in Rodanthe', 'The Notebook', 'The Last Song', 'Dear John', 'The Lucky One', 'Message in a Bottle', 'All the Pretty Horses', 'All That Heaven Allows', 'About a Boy', 'A Walk to Remember', 'A Room with a View', 'A Beautiful Mind', 'A Civil Action', 'A Clockwork Orange', 'A Good Year'],
//   'Adventure': ['127 Hours', 'Life of Pi', 'Tom Sawyer & Huckleberry Finn', 'The Way Back', 'The Host', 'The Twilight Saga: Breaking Dawn - Part 1', 'The Twilight Saga: Breaking Dawn - Part 2', 'The Hunger Games: Mockingjay - Part 2', 'The Hunger Games: Mockingjay - Part 1', 'The Chronicles of Narnia: The Silver Chair', 'The Chronicles of Narnia: The Magician is Nephew', 'Paranormalcy', 'The Little Mermaid', 'Fallen', 'Delirium', 'Rise of the Guardians', 'Walk the Line', 'Poseidon', '10', 'Into the Wild', 'The Spiderwick Chronicles', 'Nim is Island', 'Inkheart', 'Stand by Me', 'The Lord of the Rings: The Two Towers', 'The Lord of the Rings: The Return of the King', 'The Lord of the Rings: The Fellowship of the Ring', 'The Hobbit: An Unexpected Journey', 'The Chronicles of Narnia: The Voyage of the Dawn Tread', 'The Chronicles of Narnia: Prince Caspian', 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe', 'Stardust', 'Percy Jackson: Sea of Monsters', 'Percy Jackson & the Olympians: The Lightning Thief', 'The Twilight Saga: Eclipse', 'The Twilight Saga: New Moon', 'Lord of the Flie', 'Extremely Loud & Incredibly Clos', 'Harry Potter and the Half-Blood Prince', 'Harry Potter and the Deathly Hallows: Part 1', 'Harry Potter and the Order of the Phoenix', 'Harry Potter and the Deathly Hallows: Part 2', 'Harry Potter and the Prisoner of Azkaban', 'Harry Potter and the Goblet of Fire', 'Harry Potter and the Chamber of Secrets', 'Harry Potter and the Sorcerer is Stone', 'The Golden Compass', 'A Little Romance', 'Rifles', 'The Hunger Games', 'The Hunger Games: Catching Fire'],
//   'Suspense': ['127 Hours', 'Fifty Shades of Grey', 'Wake', 'The Host', 'The Hunger Games: Mockingjay - Part 2', 'The Hunger Games: Mockingjay - Part 1', 'One for the Money', 'The Forest of Hands and Teeth', 'Shiver', 'The Woman in Black', 'Jack Reacher', 'The Last King of Scotland', 'Zodiac', 'No Country for Old Men', 'Gone Baby Gone', 'I Am Legend', '21', 'The Ghost Writer', 'Shutter Island', 'Green Zone', 'The Town', 'The Lincoln Lawyer', 'We Need to Talk About Kevin', 'Misery', 'The Mist', 'The Pelican Brief', 'The Lovely Bones', 'Percy Jackson: Sea of Monsters', 'Lord of the Flie', 'Extremely Loud & Incredibly Clos', 'The Green Mile', 'Luftslottet som sprängdes', 'Flickan som lekte med elden', 'Män som hatar kvinnor', 'The Girl with the Dragon Tattoo', 'The Da Vinci Code', 'Angels & Demons', 'The Hunger Games', 'The Hunger Games: Catching Fire']
// };

// keys = Object.keys(data);

// console.log(data['Sci-Fi'].length);

var data = {
  'Sci-Fi': {
    'The Hunger Games': {
      'novelist': 'Suzanne Collins',
      'year' : '2012',
    },
    'Never Let Me Go': {
      'novelist': 'Kazuo Ishiguro',
      'year' : '2010',
    },
    'The Host': {
      'novelist': 'Stephenie Meyer',
      'year' : '2013',
    },
    'The Hunger Games: Mockingjay - Part 2': {
      'novelist': 'Suzanne Collins',
      'year' : '2015',
    },
    'The Hunger Games: Mockingjay - Part 1': {
      'novelist': 'Suzanne Collins',
      'year' : '2014',
    },
    'Incarceron': {
      'novelist': 'Catherine Fisher',
      'year' : '2017',
    },
    'Children of Men': {
      'novelist': 'P. D. James',
      'year' : '2006',
    },
    'I Am Legend': {
      'novelist': 'Richard Matheson',
      'year' : '2007',
    },
    'The Time Traveler is Wife': {
      'novelist': 'Audrey Niffenegger',
      'year' : '2009',
    },
    'The Golden Compass': {
      'novelist': 'Philip Pullman',
      'year' : '2007',
    },
    'The Hunger Games: Catching Fire': {
      'novelist': 'Suzanne Collins',
      'year' : '2013',
    },
    'A Clockwork Orange': {
      'novelist': 'Anthony Burgess',
      'year' : '1971',
    }
  },
  'Romantic': {
    '100 Rifles': {
      'novelist': 'Robert MacLeods',
      'year' : '1969',
    },
    'Fifty Shades of Grey': {
      'novelist': 'E. L. James',
      'year' : '2015',
    },
    'Great Expectations': {
      'novelist': 'Charles Dickens',
      'year' : '2012',
    },
    'Serpent Girl': {
      'novelist': 'Matthew Carnahan',
      'year' : '2019',
    },
    'Never Let Me Go': {
      'novelist': 'Kazuo Ishiguro',
      'year' : '2010',
    },
    'Få meg på, for faen': {
      'novelist': 'Olaug Nilssen',
      'year' : '2011',
    },
    'Submarine': {
      'novelist': 'Joe Dunthorne',
      'year' : '2010',
    },
    'The Host': {
      'novelist': 'Stephenie Meyer',
      'year' : '2013',
    },
    'The Twilight Saga: Breaking Dawn - Part 1': {
      'novelist': 'Stephenie Meyer',
      'year' : '2011',
    },
    'The Twilight Saga: Breaking Dawn - Part 2': {
      'novelist': 'Stephenie Meyer',
      'year' : '2012',
    },
    'One for the Money': {
      'novelist': 'Janet Evanovich',
      'year' : '2012',
    },
    'Wicked Lovely': {
      'novelist': 'Melissa Marr',
      'year' : '2009',
    },
    'The Little Mermaid': {
      'novelist': 'Hans Christian Andersen',
      'year' : '2016',
    },
    'The Forest of Hands and Teeth': {
      'novelist': 'Carrie Ryan',
      'year' : '2018',
    },
    'Shiver': {
      'novelist': 'Maggie Stiefvater',
      'year' : '2011',
    },
    'Fallen': {
      'novelist': 'Lauren Kate',
      'year' : '2016',
    },
    'Delirium': {
      'novelist': 'Lauren Oliver',
      'year' : '2014',
    },
    'Beautiful Creatures': {
      'novelist': 'Kami Garcia & Margaret Stohl',
      'year' : '2013',
    },
    'Beastly': {
      'novelist': 'Alex Flinn',
      'year' : '2011',
    },
    'A Great and Terrible Beauty': {
      'novelist': 'Libba Bray',
      'year' : '2003',
    },
    'Rock of Ages': {
      'novelist': 'Chris DArienzo',
      'year' : '2012',
    },
    'The Sisterhood of the Traveling Pants 2': {
      'novelist': 'Ann Brashares',
      'year' : '2008',
    },
    'The Sisterhood of the Traveling Pants': {
      'novelist': 'Ann Brashares',
      'year' : '2005',
    },
    'Annie Proulx': {
      'novelist': 'Brokeback Mountain',
      'año' : '2005',
    },
    'Walk the Line': {
      'novelist': 'James Mangold',
      'year' : '2005',
    },
    'In Her Shoes': {
      'novelist': 'Jennifer Weiner',
      'year' : '2005',
    },
    'Peaceful Warrior': {
      'novelist': 'Dan Millman',
      'year' : '2006',
    },
    'The Painted Veil': {
      'novelist': 'William Somerset Maugham',
      'year' : '2006',
    },
    'Snow Angels': {
      'novelist': 'Stewart ONan',
      'year' : '2007',
    },
    'Jane Eyre': {
      'novelist': 'Charlotte Brontë',
      'year' : '2011',
    },
    'The Nanny Diaries': {
      'novelist': 'Emma McLaughlin & Nicola Kraus',
      'year' : '2007',
    },
    'Silk': {
      'novelist': 'Alessandro Baricco',
      'year' : '2007',
    },
    'The Great Debaters': {
      'novelist': 'Jim Harriyear',
      'year' : '2007',
    },
    'P.S. I Love You': {
      'novelist': 'Cecelia Ahern',
      'year' : '2007',
    },
    'Mamma Mia!': {
      'novelist': 'Catherine Johnson',
      'year' : '2008',
    },
    'The Duchess': {
      'novelist': 'The Duchess',
      'year' : '2008',
    },
    'The Curious Case of Benjamin Button': {
      'novelist': 'F. Scott Fitzgerald',
      'year' : '2008',
    },
    'Revolutionary Road': {
      'novelist': 'Richard Yates',
      'year' : '2008',
    },
    'Confessions of a Shopaholic': {
      'novelist': 'Sophie Kinsella',
      'year' : '2009',
    },
    'The Last Station': {
      'novelist': 'Jay Parini',
      'year' : '2009',
    },
    'Up in the Air': {
      'novelist': 'Walter Kirn',
      'year' : '2009',
    },
    'Crazy Heart': {
      'novelist': 'Thomas Cobb',
      'year' : '2009',
    },
    'A Single Man': {
      'novelist': 'Christopher Isherwood',
      'year' : '2009',
    },
    'Tamara Drewe': {
      'novelist': 'Thomas Hardy',
      'year' : '2010',
    },
    'Jane Eyre': {
      'novelist': 'Charlotte Brontë',
      'year' : '2011',
    },
    'Water for Elephants': {
      'novelist': 'Sara Gruen',
      'year' : '2011',
    },
    'Atonement': {
      'novelist': 'Ian McEwan',
      'year' : '2007',
    },
    'Appaloosa': {
      'novelist': 'Robert B. Parker',
      'year' : '2008',
    },
    'Wuthering Heights': {
      'novelist': 'Emily Brontë',
      'year' : '1992',
    },
    'The Time Traveler is Wife': {
      'novelist': 'Audrey Niffenegger',
      'year' : '2009',
    },
    'Stardust': {
      'novelist': 'Neil Gaiman',
      'year' : '2007',
    },
    'Persuasion': {
      'novelist': 'Jane Austen',
      'year' : '2007',
    },
    'Emma': {
      'novelist': 'Jane Austen',
      'year' : '1948',
    },
    'Northanger Abbey': {
      'novelist': 'Jane Austen',
      'year' : '2007',
    },
    'Sense and Sensibility': {
      'novelist': 'Jane Austen',
      'year' : '1995',
    },
    'Pride & Prejudice': {
      'novelist': 'Jane Austen',
      'year' : '2005',
    },
    'The Twilight Saga: Eclipse': {
      'novelist': 'Stephenie Meyer',
      'year' : '2010',
    },
    'The Twilight Saga: New Moon': {
      'novelist': 'Stephenie Meyer',
      'year' : '2009',
    },
    'Twilight': {
      'novelist': 'Stephenie Meyer',
      'year' : '2008',
    },
    'Forrest Gump': {
      'película': 'Winston Groom',
      'year' : '1994',
    },
    'One Day': {
      'novelist': 'David Nicholls',
      'year' : '2011',
    },
    'Nights in Rodanthe': {
      'novelist':  'Nicholas Sparks',
      'year' : '2008',
    },
    'The Notebook': {
      'novelist':  'Nicholas Sparks',
      'year' : '2004',
    },
    'The Last Song': {
      'novelist':  'Nicholas Sparks',
      'year' : '2010',
    },
    'Dear John': {
      'novelist':  'Nicholas Sparks',
      'year' : '2010',
    },
    'The Lucky One': {
      'novelist': 'Nicholas Sparks',
      'year' : '2012'
    },
    'Message in a Bottle': {
      'novelist': 'Nicholas Sparks',
      'year' : '1999',
    },
    'All the Pretty Horses': {
      'novelist':  'Cormac McCarthy', 
      'year' : '2000',
    },
    'All That Heaven Allows': {
      'novelist': 'Edna Lee & Harry Lee',
      'year' : '1955',
    },
    'About a Boy': {
      'novelist': 'Nick Hornby',
      'year' : '2002',
    },
    'A Walk to Remember': {
      'novelist': 'Nicholas Sparks',
      'year' : '2002',
    },
    'A Room with a View': {
      'novelist': 'E.M. Forster',
      'year' : '1985',
    },
    'A Good Year': {
      'novelist': 'Peter Mayl',
      'year' : '2006',
    },
    'A Little Romance': {
      'novelist': 'Patrick Cauvin',
      'yer' : '1979',
    },
  },
  'Biography':{
    'Danny Boyle y Simon Beaufoy': {
      'novelist': '127 Hours',
      'year' : '2010',
    },
    'Walk the Line': {
      'novelist': 'James Mangold',
      'year' : '2005',
    },
    'The Greatest Game Ever Played': {
      'novelist': 'Mark Frost',
      'year' : '2005',
    },
    'Glory Road': {
      'novelist': 'Jonathan Hoag',
      'year' : '2006',
    },
    'The Last King of Scotland': {
      'novelist': 'Giles Foden',
      'year' : '2006',
    },
    'The Pursuit of Happyness': {
      'novelist': 'Maira Kalman',
      'year' : '2006',
    },
    'Freedom Writers': {
      'novelist': 'Elie Wiesel',
      'year' : '2007',
    },
    'Into the Wild': {
      'novelist': 'Jon Krakauer',
      'year' : '2007',
    },
    'The Assassination of Jesse James by the Coward Robert Ford': {
      'novelist': 'Ron Hansen',
      'year' : '2007',
    },
    'Charlie Wilson is War': {
      'novelist': 'George Crile',
      'year' : '2007',
    },
    'The Great Debaters': {
      'novelist': 'Jim Harrison',
      'year' : '2007',
    },
    'The Duchess': {
      'novelist': 'Amanda Foreman',
      'year' : '2008',
    },
    'The Express': {
      'novelist': 'Robert C. Gallagher', 
      'year' : '2008',
    },
    'Public Enemies': {
      'novelist': 'Bryan Burrough', 
      'year' : '2009',
    },
    'The Soloist': {
      'novelist': 'Steve Lopez', 
      'year' : '2009',
    },
    'The Last Station': {
      'novelist': 'Jay Parini', 
      'year' : '2009',
    },
    'The Blind Side': {
      'novelist': 'Michael Lewis', 
      'year' : '2009',
    },
    'The Runaways': {
      'novelist': 'Sunjeev Sahota', 
      'year' : '2010',
    },
    'The Social Network': {
      'novelist': 'Ben Mezrich', 
      'year' : '2010',
    },
    'Secretariat': {
      'novelist': 'William Nack', 
      'year' : '2010',
    },
    'A Beautiful Mind': {
      'novelist': 'Sylvia Nasar',
      'year' : '2001',
    },
    'Awakenings': {
      'novelist': 'L. J. Smith', 
      'year' : '1990',
    },
  },
  'Horror': {
    'The Mist': {
      'novelist': 'Stephen King', 
      'year' : '2007',
    },
    'Paranormalcy': {
      'novelist': 'Mario Mendoza',
      'year' : '2007',
    },
    'I Am Legend': {
      'novelist': 'Richard Matheson', 
      'year' : '2007',
    },
    'It': {
      'novelist': 'Stephen King', 
      'year' : '',
    },
    'Vampire Academy': {
      'novelist': 'Daniel Waters', 
      'year' : '2014',
    },
  },
  'Fantasy': {
    'Twilight': {
      'novelist': 'Stephenie Meyer',
      'year' : '2008',
    },
    'Life of Pi': {
      'novelist': 'Yann Martel',
      'year' : '2012',
    },
    'Serpent Girl': {
      'novelist': 'Matthew Carnahan',
      'year' : '2019',
    },
    'The Twilight Saga: Breaking Dawn - Part 1': {
      'novelist': 'Stephenie Meyer',
      'year' : '2011',
    },
    'The Twilight Saga: Breaking Dawn - Part 2': {
      'novelist': 'Stephenie Meyer',
      'year' : '2012',
    },
    'The Chronicles of Narnia: The Silver Chair': {
      'novelist': 'C. S. Lewis',
      'year' : '2018',
    },
    'The Chronicles of Narnia: The Magician is Nephew': {
      'novelist': 'C. S. Lewis',
      'year' : '2014',
    },
    'Wicked Lovely': {
      'novelist': 'Melissa Marr',
      'year' : '2009',
    },
    'Vampire Academy': {
      'novelist': 'Daniel Waters',
      'year' : '2014',
    },
    'The Looking Glass Wars': {
      'novelist': 'Frank Beddor',
      'year' : '2015',
    },
    'The Little Mermaid': {
      'novelist': 'Hans Christian Andersen',
      'year' : '2016',
    },
    'Shiver': {
      'novelist': 'Maggie Stiefvater',
      'year' : '2011',
    },
    'Incarceron': {
      'novelist': 'Catherine Fisher',
      'year' : '2017',
    },
    'If I Stay': {
      'novelist': 'Gayle Forman',
      'year' : '2014',
    },
    'Firelight': {
      'novelist': 'Sophie Jordan',
      'year' : '2011',
    },
    'Fallen': {
      'novelist': 'Lauren Kate',
      'year' : '2016',
    },
    'Delirium': {
      'novelist': 'Lauren Oliver',
      'year' : '2014',
    },
    'Beautiful Creatures': {
      'novelist': 'Kami Garcia & Margaret Stohl',
      'year' : '2013',
    },
    'Beastly': {
      'novelist': 'Alex Flinn',
      'year' : '2011',
    },
    'Wings': {
      'novelist': 'Aprilynne Pike',
      'year' : '1927',
    },
    'A Great and Terrible Beauty': {
      'novelist': 'Libba Bray',
      'year' : '2003',
    },
    'The Woman in Black': {
      'novelist': 'Susan Hill',
      'year' : '2012',
    },
    'The Spiderwick Chronicles': {
      'novelist': 'Tony DiTerlizzi & Holly Black',
      'year' : '2008',
    },
    'Nim is Island': {
      'novelist': 'Wendy Orr',
      'year' : '2008',
    },
    'Inkheart': {
      'novelist': 'Cornelia Funke',
      'year' : '2008',
    },
    'The Time Traveler is Wife': {
      'novelist': 'Audrey Niffenegger',
      'year' : '2009',
    },
    'The Lovely Bones': {
      'novelist': 'Alice Sebold',
      'year' : '2009',
    },
    'The Lord of the Rings: The Two Towers': {
      'novelist': 'J. R. R. Tolkien',
      'year' : '2001',
    },
    'JThe Lord of the Rings: The Return of the King': {
      'novelist': 'J. R. R. Tolkien',
      'year' : '2003',
    },
    'The Lord of the Rings: The Fellowship of the Ring': {
      'novelist': 'J. R. R. Tolkien',
      'year' : '2001',
    },
    'The Hobbit: An Unexpected JourneyJ': {
      'novelist': '. R. R. Tolkien',
      'year' : '2012',
    },
    'The Chronicles of Narnia: The Voyage of the Dawn Tread': {
      'novelist': 'C. S. Lewis',
      'year' : '2010',
    },
    'The Chronicles of Narnia: Prince Caspian': {
      'novelist': 'C. S. Lewis',
      'year' : '2008',
    },
    'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe': {
      'novelist': 'C. S. Lewis',
      'year' : '2005',
    },
    'Stardust': {
      'novelist': 'Neil Gaiman',
      'year' : '2007',
    },
    'Percy Jackson: Sea of Monsters': {
      'novelist': 'Rick Riordan',
      'year' : '2013',
    },
    'Percy Jackson & the Olympians: The Lightning Thief': {
      'novelist':  'Rick Riordan',
      'year' : '2010',
    },
    'The Twilight Saga: Eclipse': {
      'novelist':  'Stephenie Meyer',
      'year' : '2010',
    },
    'The Twilight Saga: New Moon': {
      'novelist': 'Stephenie Meyer',
      'year' : '2009',
    },
    'Harry Potter and the Deathly Hallows: Part 1': {
      'novelist': 'J. K. Rowling',
      'year' : '2010',
    },
    'Harry Potter and the Half-Blood Prince': {
      'novelist': 'J. K. Rowling',
      'year' : '2009',
    },
    'Harry Potter and the Order of the Phoenix': {
      'novelist': 'J. K. Rowling',
      'year' : '2007',
    },
    'Harry Potter and the Prisoner of Azkaban': {
      'novelist': 'J. K. Rowling',
      'year' : '2004',
    },
    'Harry Potter and the Deathly Hallows: Part 2': {
      'novelist': 'J. K. Rowling',
      'year' : '2011',
    },
    'Harry Potter and the Goblet of Fire': {
      'novelist':  'J. K. Rowling',
      'year' : '2005',
    },
    'Harry Potter and the Sorcerer is Stone': {
      'novelist': 'J. K. Rowling',
      'year' : '2001',
    },
    'Harry Potter and the Chamber of Secrets': {
      'novelist': 'J. K. Rowling',
      'year' : '2002',
    },
  },
  'Comedy': {
    'A Good Year': {
      'novelist': 'Peter Mayl',
      'year' : '2006',
    },
    'Få meg på, for faen': {
      'novelist': 'Olaug Nilssen',
      'year' : '2011',
    },
    'Submarine': {
      'novelist': 'Joe Dunthorne',
      'year' : '2010',
    },
    'Barney is Version': {
      'novelist': 'Mordecai Richler',
      'year' : '2010',
    },
    'One for the Money': {
      'novelist': 'Janet Evanovich',
      'year' : '2012',
    },
    'Vampire Academy': {
      'novelist': 'Daniel Waters',
      'year' : '2014',
    },
    'Rock of Ages': {
      'novelist': 'Chris DArienzo',
      'year' : '2012',
    },
    'Mean Girls': {
      'novelist': 'Micol Ostow',
      'year' : '2004',
    },
    'The Sisterhood of the Traveling Pants 2': {
      'novelist': 'Ann Brashares',
      'year' : '2008',
    },
    'The Sisterhood of the Traveling Pants': {
      'novelist': 'Ann Brashares',
      'year' : '2005',
    },
    'In Her Shoes': {
      'novelist': 'Jennifer Weiner',
      'year' : '2005',
    },
    'The Devil Wears Prada': {
      'novelist': 'Lauren Weisberger',
      'year' : '2006',
    },
    'The Nanny Diaries': {
      'novelist': 'Emma McLaughlin & Nicola Kraus',
      'year' : '2007',
    },
    'Charlie Wilson is War': {
      'novelist': 'George Crile',
      'year' : '2007',
    },
    'Miss Pettigrew Lives for a Day': {
      'novelist': 'Winifred Watson',
      'year' : '2008',
    },
    'Nim is Island': {
      'novelist': 'Wendy Orr',
      'year' : '2008',
    },
    'Mamma Mia!': {
      'novelist': 'Catherine Johnson',
      'year' : '2008',
    },
    'The Women': {
      'novelist': 'Charles Bukowski',
      'year' : '2008',
    },
    'Confessions of a Shopaholic': {
      'novelist': 'Sophie Kinsella',
      'year' : '2009',
    },
    'Tamara Drewe': {
      'novelist': 'Thomas Hardy',
      'year' : '2010',
    },
    'Mansfield Park': {
      'novelist': 'Jane Austen',
      'year' : '1999',
    },
    'A Little Romance': {
      'novelist': 'Patrick Cauvin',
      'year' : '1979',
    },
    'About a Boy': {
      'novelist': 'Nick Hornby',
      'year' : '2002',
    },
  }, 
  'Action': {
    '100 Rifles': {
      'novelist': 'Robert MacLeods',
      'year' : '1969',
    },
    'Tom Sawyer & Huckleberry Finn': {
      'novelist': 'Mark Twain',
      'year' : '2014',
    },
    'The Host': {
      'novelist': 'Stephenie Meyer',
      'year' : '2013',
    },
    'The Hunger Games: Mockingjay - Part 2': {
      'novelist': 'Suzanne Collins',
      'year' : '2015',
    },
    'The Hunger Games: Mockingjay - Part 1': {
      'novelist': 'Suzanne Collins',
      'year' : '2014',
    },
    'The Chronicles of Narnia: The Magician is Nephew': {
      'novelist': 'C. S. Lewis',
      'year' : '2014',
    },
    'One for the Money': {
      'novelist': 'Janet Evanovich',
      'year' : '2012',
    },
    'Vampire Academy': {
      'novelist': 'Daniel Waters',
      'year' : '2014',
    },
    'Jack Reacher': {
      'novelist': 'Lee Child',
      'year' : '2012',
    },
    'Friday Night Lights': {
      'novelist': 'Harry Gerard Bissinger',
      'year' : '2004',
    },
    'Poseidon': {
      'novelist': 'Paul Gallico',
      'year' : '2006',
    },
    'Green Zone': {
      'novelist': 'Rajiv Chandrasekaran',
      'year' : '2010',
    },
    'The Chronicles of Narnia: Prince Caspian': {
      'novelist': 'C. S. Lewis',
      'year' : '2008',
    },
    'The Green Mile': {
      'novelist': 'Stephen King',
      'year' : '1999',
    },
    'Luftslottet som sprängdes': {
      'novelist': 'Stieg Larsson',
      'year' : '2009',
    },
    'Dear John': {
      'novelist': 'Nicholas Sparks',
      'year' : '2010',
    },
    'All the Pretty Horses': {
      'novelist': 'Cormac McCarthy',
      'year' : '2000',
    },
    'The Hunger Games: Catching Fire': {
      'novelist': 'Suzanne Collins',
      'year' : '2013',
    },
    'A Clockwork Orange': {
      'novelist': 'Anthony Burgess',
      'year' : '1971',
    },
  },
  'Drama': {
    '127 Hours': {
      'novelist': 'Danny Boyle y Simon Beaufoy',
      'year' : '2010',
    },
    'Fifty Shades of Grey': {
      'novelist': 'E. L. James',
      'year' : '2015',
    },
    'Life of Pi': {
      'novelist': 'Yann Martel',
      'year' : '2012',
    },
    'Great Expectations': {
      'novelist': 'Charles Dickens',
      'year' : '2012',
    },
    'Never Let Me Go': {
      'novelist': 'Kazuo Ishiguro',
      'year' : '2010',
    },
    'Island': {
      'novelist': 'Victoria Hislop',
      'year' : '2011',
    },
    'Tom Sawyer & Huckleberry Finn': {
      'novelist': 'Mark Twain',
      'year' : '2014',
    },
    'Simon och ekarna': {
      'película': 'Marianne Fredriksson',
      'año' : '2011',
    },
    'Gomorra': {
      'novelist': 'Roberto Saviano',
      'year' : '2008',
    },
    'Oranges and Sunshine': {
      'novelist': 'Margaret Humphreys',
      'year' : '2010',
    },
    'Submarine': {
      'novelist': 'Joe Dunthorne',
      'year' : '2010',
    },
    'Barney is Version': {
      'novelist': 'Mordecai Richler',
      'year' : '2010',
    },
    'The Way Back': {
      'novelist': 'Kylie Ladd',
      'year' : '2010',
    },
    'The Twilight Saga: Breaking Dawn - Part 1': {
      'novelist': 'Stephenie Meyer',
      'year' : '2011',
    },
    'The Twilight Saga: Breaking Dawn - Part 2': {
      'novelist': 'Stephenie Meyer',
      'year' : '2012',
    },
    'The Forest of Hands and Teeth': {
      'novelist': 'Carrie Ryan',
      'year' : '2018',
    },
    'Incarceron': {
      'novelist': 'Catherine Fisher',
      'year' : '2017',
    },
    'If I Stay': {
      'novelist': 'Gayle Forman',
      'year' : '2014',
    },
    'Heist Society': {
      'novelist': 'Ally Carter',
      'year' : '2016',
    },
    'Fallen': {
      'novelist': 'Lauren Kate',
      'year' : '2016',
    },
    'Beautiful Creatures': {
      'novelist': 'Kami Garcia & Margaret Stohl',
      'year' : '2013',
    },
    'Beastly': {
      'novelist': 'Alex Flinn',
      'year' : '2011',
    },
    'Wings': {
      'novelist': 'Aprilynne Pike',
      'year' : '1927',
    },
    'A Great and Terrible Beauty': {
      'novelist': 'Libba Bray',
      'year' : '2003',
    },
    'The Woman in Black': {
      'novelist': 'Susan Hill',
      'year' : '2012',
    },
    'Rock of Ages': {
      'novelist': 'Chris DArienzo',
      'year' : '2012',
    },
    'Lawless': {
      'novelist': 'Matt Bondurant',
      'year' : '2012',
    },
    'Mean Moms': {
      'novelist': 'Rosalind Wiseman',
      'year' : '2018',
    },
    'Friday Night Lights': {
      'novelist': 'Harry Gerard Bissinger',
      'year' : '2004',
    },
    'Vanity Fair': {
      'novelist': 'William Makepeace Thackeray',
      'year' : '2004',
    },
    'Million Dollar Baby': {
      'novelist': 'F.X. Toole',
      'year' : '2004',
    },
    'The Magic of Ordinary Days': {
      'novelist': 'Ann Howard Creel',
      'year' : '2005',
    },
    'The Sisterhood of the Traveling Pants 2': {
      'novelist': 'Ann Brashares',
      'year' : '2008',
    },
    'Brokeback Mountain': {
      'novelist': 'Annie Proulx',
      'year' : '2005',
    },
    'In Her Shoes': {
      'novelist': 'Jennifer Weiner',
      'year' : '2005',
    },
    'The Greatest Game Ever Played': {
      'novelist': 'Mark Frost',
      'year' : '2005',
    },
    'Glory Road': {
      'novelist': 'Jonathan Hoag',
      'year' : '2006',
    },
    'Poseidon': {
      'novelist': 'Paul Gallico',
      'year' : '2006',
    },
    'Peaceful Warrior': {
      'novelist': 'Dan Millman',
      'year' : '2006',
    },
    'The Devil Wears Prada': {
      'novelist': 'Lauren Weisberger',
      'year' : '2006',
    },
    'The Last King of Scotland': {
      'novelist': 'Giles Foden',
      'year' : '2006',
    },
    'Love is Abiding Joy': {
      'novelist': 'Janette Oke',
      'year' : '2006',
    },
    'The Pursuit of Happyness': {
      'novelist': 'Maira Kalman',
      'year' : '2006',
    },
    'The Painted Veil': {
      'novelist': 'William Somerset Maugham',
      'year' : '2006',
    },
    'Children of Men': {
      'novelist': 'P. D. James',
      'year' : '2006',
    },
    'Freedom Writers': {
      'novelist': 'Elie Wiesel',
      'year' : '2007',
    },
    'Snow Angels': {
      'novelist': 'Stewart ONan', 
      'year' : '2007',
    },
    'Jane Eyre': {
      'novelist': 'Charlotte Brontë',
      'year' : '2011',
    },
    'Zodiac': {
      'novelist': 'Robert Graysmith',
      'year' : '2007',
    },
    'Saving Sarah Cain': {
      'novelist': 'Beverly Lewis',
      'year' : '2007',
    },
    'The Nanny Diaries': {
      'novelist': 'Emma McLaughlin & Nicola Kraus',
      'year' : '2007',
    },
    'Into the Wild': {
      'novelist': 'Jon Krakauer',
      'year' : '2007',
    },
    'Silk': {
      'novelist': 'Alessandro Baricco',
      'year' : '2007',
    },
    'The Assassination of Jesse James by the Coward Robert Ford': {
      'novelist': 'Ron Hansen',
      'year' : '2007',
    },
    'No Country for Old Men': {
      'novelist': 'Cormac McCarthy',
      'year' : '2007',
    },
    'Gone Baby Gone': {
      'novelist': 'Dennis Lehane',
      'year' : '2007',
    },
    'Charlie Wilson is War': {
      'novelist': 'George Crile',
      'year' : '2007',
    },
    'The Great Debaters': {
      'novelist': 'Jim Harrison',
      'year' : '2007',
    },
    'I Am Legend': {
      'novelist': 'Richard Matheson',
      'year' : '2007',
    },
    'Love is Unfolding Dream': {
      'novelist': 'Janette Oke',
      'year' : '2007',
    },
    'P.S. I Love You': {
      'novelist': 'Cecelia Ahern',
      'year' : '2007',
    },
    'Nothing Is Private': {
      'novelist': 'Alicia Erian',
      'year' : '2007',
    },
    'The Women': {
      'novelist': 'Charles Bukowski',
      'year' : '2008',
    },
    '21': {
      'novelist': 'Joseph Finder',
      'year' : '2008',
    },
    'The Duchess': {
      'novelist': 'Amanda Foreman',
      'year' : '2008',
    },
    'The Express': {
      'novelist': 'Robert C. Gallagher',
      'year' : '2008',
    },
    'The Secret Life of Bees': {
      'novelist': 'Sue Monk Kidd',
      'year' : '2008',
    },
    'The Boy in the Striped Pyjamas': {
      'novelist': 'John Boyne',
      'year' : '2008',
    },
    'The Curious Case of Benjamin Button': {
      'novelist': 'F. Scott Fitzgerald',
      'year' : '2008',
    },
    'Revolutionary Road': {
      'novelist': 'Richard Yates',
      'year' : '2008',
    },
    'Public Enemies': {
      'novelist': 'Bryan Burrough',
      'year' : '2009',
    },
    'Like Dandelion Dust': {
      'novelist': 'Stephen J Rivele & Michael Lachance',
      'year' : '2009',
    },
    'The Soloist': {
      'novelist': 'Steve Lopez',
      'yer' : '2009',
    },
    'The Last Station': {
      'novelist': 'Jay Parini',
      'yer' : '2009',
    },
    'Up in the Air': {
      'novelist': 'Walter Kirn',
      'yer' : '2009',
    },
    'Crazy Heart': {
      'novelist': 'Thomas Cobb',
      'yer' : '2009',
    },
    'A Single Man': {
      'novelist': 'Christopher Isherwood',
      'yer' : '2009',
    },
    'The Blind Side': {
      'novelist': 'Michael Lewis',
      'yer' : '2009',
    },
    'Winter is Bone': {
      'novelist': 'Daniel Woodrell',
      'yer' : '2010',
    },
    'The Runaways': {
      'novelist': 'Sunjeev Sahota',
      'yer' : '2010',
    },
    'The Ghost Writer': {
      'novelist': 'Robert Harris',
      'yer' : '2010',
    },
    'Green Zone': {
      'novelist': 'Rajiv Chandrasekaran',
      'yer' : '2010',
    },
    'Tamara Drewe': {
      'novelist': 'Thomas Hardy',
      'year' : '2010',
    },
    'The Town': {
      'novelist': 'Chuck Hogan',
      'year' : '2010',
    },
    'The Social Network': {
      'novelist': 'Ben Mezrich',
      'year' : '2010',
    },
    'Secretariat': {
      'novelist': 'William Nack',
      'year' : '2010',
    },
    'Jane Eyre': {
      'novelist': 'Charlotte Brontë',
      'year' : '2011',
    },
    'The Lincoln Lawyer': {
      'novelist': 'Michael Connelly',
      'year' : '2011',
    },
    'Water for Elephants': {
      'novelist': 'Water for Elephants',
      'year' : '2011',
    },
    'Ballet Shoes': {
      'novelist': 'Noel Streatfield',
      'year' : '2007',
    },
    'Awakenings': {
      'novelist': 'L. J. Smith',
      'year' : '1990',
    },
    'Atonement': {
      'novelist': 'Ian McEwan',
      'year' : '2007',
    },
    'Appaloosa': {
      'novelist': 'Robert B. Parker',
      'year' : '2008',
    },
    'We Need to Talk About Kevin': {
      'novelist': 'Lionel Shriver',
      'year' : '2011',
    },
    'Wuthering Heights': {
      'novelist': 'Emily Brontë',
      'year' : '1992',
    },
    'The Time Traveler is Wife': {
      'novelist': 'Audrey Niffenegger',
      'year' : '2009',
    },
    'Misery': {
      'novelist': 'Stephen King',
      'year' : '1990',
    },
    'Stand by Me': {
      'novelist': 'Stephen King',
      'year' : '1986',
    },
    'The Shawshank Redemption': {
      'novelist': 'Stephen King',
      'year' : '1994',
    },
    'The Pelican Brief': {
      'novelist': 'John Grisham',
      'year' : '1993',
    },
    'The Lovely Bones': {
      'novelist': 'Alice Sebold', 
      'year' : '2009',
    },
    'The Lord of the Rings: The Two Towers': {
      'novelist': 'J. R. R. Tolkien',
      'year' : '2001',
    },
    'JThe Lord of the Rings: The Return of the King': {
      'novelist': 'J. R. R. Tolkien',
      'year' : '2003',
    },
    'The Lord of the Rings: The Fellowship of the Ring': {
      'novelist': 'J. R. R. Tolkien',
      'year' : '2001',
    },
    'The Hobbit: An Unexpected JourneyJ': {
      'novelist': '. R. R. Tolkien',
      'year' : '2012',
    },
    'Emma': {
      'novelist': 'Jane Austen',
      'year' : '1948',
    },
    'Persuasion': {
      'novelist': 'Jane Austen',
      'year' : '2007',
    },
    'Screen Two: Persuasion': {
      'novelist': 'Jane Austen',
      'year' : '1995',
    },
    'Northanger Abbey': {
      'novelist': 'Jane Austen',
      'year' : '2007',
    },
    'Mansfield Park': {
      'novelist': 'Jane Austen',
      'year' : '2007',
    },
    'Sense and Sensibility': {
      'novelist': 'Jane Austen',
      'year' : '1995',
    },
    'Pride & Prejudice': {
      'novelist': 'Jane Austen',
      'year' : '2005',
    },
    'The Twilight Saga: Eclipse': {
      'novelist': 'Stephenie Meyer',
      'year' : '2010',
    },
    'The Twilight Saga: New Moon': {
      'novelist': 'Stephenie Meyer',
      'year' : '2009',
    },
    'Twilight': {
      'novelist': 'Stephenie Meyer',
      'year' : '2008',
    },
    'My Sister is Keeper': {
      'novelist': 'Jodi Picoult',
      'year' : '2009',
    },
    'Lord of the Flies': {
      'novelist': 'William Golding',
      'year' : '1990',
    },
    'Forrest Gump': {
      'novelist': 'Winston Groom',
      'year' : '1994',
    },
    'One Day': {
      'novelist': 'David Nicholls',
      'year' : '2011',
    },
    'Extremely Loud & Incredibly Close': {
      'novelist': 'Jonathan Safran Foer',
      'year' : '2011',
    },
    'The Help': {
      'novelist': 'Kathryn Stockett',
      'year' : '2011',
    },
    'The Green Mile': {
      'novelist': 'Stephen King',
      'year' : '1999',
    },
    'Luftslottet som sprängdes': {
      'novelist': 'Stieg Larsson',
      'year' : '2009',
    },
    'Ondskan': {
      'novelist': 'Jan Guillou',
      'year' : '2003',
    },
    'Flickan som lekte med elden': {
      'novelist': 'Stieg Larsson',
      'year' : '2009',
    },
    'Stieg Larsson': {
      'película': 'Luftslottet som sprängdes',
      'año' : '2009',
    },
    'Jan Guillou': {
      'película': 'Ondskan',
      'año' : '2003',
    },
    'Flickan som lekte med elden': {
      'novelist': 'Stieg Larsson',
      'year' : '2009',
    },
    'Män som hatar kvinnor': {
      'novelist': 'Stieg Larsson',
      'year' : '2009',
    },
    'The Girl with the Dragon Tattoo': {
      'novelist': 'Stieg Larsson',
      'year' : '2011',
    },
    'Nights in Rodanthe': {
      'novelist': 'Nicholas Sparks',
      'year' : '2008',
    },
    'The Notebook': {
      'novelist': 'Nicholas Sparks',
      'year' : '2004',
    },
    'The Last Song': {
      'novelist': 'Nicholas Sparks',
      'year' : '2010',
    },
    'Dear John': {
      'novelist': 'Nicholas Sparks',
      'year' : '2010',
    },
    'The Lucky One': {
      'novelist': 'Nicholas Sparks',
      'year' : '2012',
    },
    'Message in a Bottle': {
      'novelist': 'Nicholas Sparks',
      'year' : '1999',
    },
    'All the Pretty Horses': {
      'novelist': 'Cormac McCarthy',
      'year' : '2000',
    },
    'All That Heaven Allows': {
      'novelist': 'Edna Lee & Harry Lee',
      'year' : '1955',
    },
    'About a Boy': {
      'novelist': 'Nick Hornby',
      'year' : '2002',
    },
    'A Walk to Remember': {
      'novelist': 'Nicholas Sparks',
      'year' : '2002',
    },
    'A Room with a View': {
      'novelist': 'E.M. Forster.',
      'year' : '1985',
    },
    'A Beautiful Mind': {
      'novelist': 'Sylvia Nasar',
      'year' : '2001',
    },
    'A Civil Action': {
      'novelist': 'Jonathan Harr',
      'year' : '1998',
    },
    'A Clockwork Orange': {
      'novelist': 'Anthony Burgess',
      'year' : '1971',
    },
    'A Good Year': {
      'novelist': 'Peter Mayl',
      'year' : '2006',
    },
  },
  'Adventure': {
    '127 Hours': {
      'novelist': 'Danny Boyle y Simon Beaufoy',
      'year' : '2010',
    },
    'Life of Pi': {
      'novelist': 'Yann Martel',
      'year' : '2012',
    },
    'Tom Sawyer & Huckleberry Finn': {
      'novelist': 'Mark Twain',
      'year' : '2014',
    },
    'The Way Back': {
      'novelist': 'Kylie Ladd',
      'year' : '2010',
    },
    'The Host': {
      'novelist': 'Stephenie Meyer',
      'year' : '2013',
    },
    'The Twilight Saga: Breaking Dawn - Part 1': {
      'novelist': 'Stephenie Meyer',
      'year' : '2011',
    },
    'The Twilight Saga: Breaking Dawn - Part 2': {
      'novelist': 'Stephenie Meyer',
      'year' : '2012',
    },
    'The Hunger Games: Mockingjay - Part 2': {
      'novelist': 'Suzanne Collins',
      'year' : '2015',
    },
    'The Hunger Games: Mockingjay - Part 1': {
      'novelist': 'Suzanne Collins',
      'year' : '2014',
    },
    'The Chronicles of Narnia: The Silver Chair': {
      'novelist': 'C. S. Lewis',
      'year' : '2018',
    },
    'The Chronicles of Narnia: The Magician is Nephew': {
      'novelist': 'C. S. Lewis',
      'year' : '2014',
    },
    'The Little Mermaid': {
      'novelist': 'Hans Christian Andersen',
      'year' : '2016',
    },
    'Fallen': {
      'novelist': 'Lauren Kate',
      'year' : '2016',
    },
    'Delirium': {
      'novelist': 'Lauren Oliver',
      'year' : '2014',
    },
    'Rise of the Guardians': {
      'novelist': 'William Joyce',
      'year' : '2012',
    }, 
    'Walk the Line': {
      'novelist': 'James Mangold',
      'year' : '2005',
    }, 
    'Poseidon': {
      'novelist': 'Paul Gallico',
      'year' : '2006',
    },
    'Into the Wild': {
      'novelist': 'Jon Krakauer',
      'year' : '2007',
    },
    'The Spiderwick Chronicles': {
      'novelist': 'Tony DiTerlizzi & Holly Black',
      'year' : '2008',
    },
    'Nim is Island': {
      'novelist': 'Wendy Orr',
      'year' : '2008',
    },
    'Inkheart': {
      'novelist': 'Cornelia Funke',
      'year' : '2008',
    },
    'Stand by Me': {
      'novelist': 'Stand by MeStephen King',
      'year' : '1986',
    },
    'The Lord of the Rings: The Two Towers': {
      'novelist': 'J. R. R. Tolkien',
      'year' : '2002',
    }, 
    'The Lord of the Rings: The Two Towers': {
      'novelist': 'J. R. R. Tolkien',
      'year' : '2001',
    },
    'JThe Lord of the Rings: The Return of the King': {
      'novelist': 'J. R. R. Tolkien',
      'year' : '2003',
    },
    'The Lord of the Rings: The Fellowship of the Ring': {
      'novelist': 'J. R. R. Tolkien',
      'year' : '2001',
    },
    'The Hobbit: An Unexpected JourneyJ': {
      'novelist': '. R. R. Tolkien',
      'year' : '2012',
    },
    'The Chronicles of Narnia: The Voyage of the Dawn Tread': {
      'novelist': 'C. S. Lewis',
      'year' : '2010',
    },
    'The Chronicles of Narnia: Prince Caspian': {
      'novelist': 'C. S. Lewis',
      'year' : '2008',
    },
    'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe': {
      'novelist': 'C. S. Lewis',
      'year' : '2005',
    },
    'Neil Gaiman Stardust': {
      'novelist': 'Neil Gaiman',
      'year' : '2007',
    },
    'Percy Jackson: Sea of Monsters': {
      'novelist': 'Rick Riordan',
      'year' : '2013',
    },
    'Percy Jackson & the Olympians: The Lightning Thief': {
      'novelist': 'Rick Riordan',
      'year' : '2010',
    }, 
    'The Twilight Saga: Eclipse': {
      'novelist': 'Stephenie Meyer',
      'year' : '2010',
    },
    'The Twilight Saga: New Moon': {
      'novelist': 'Stephenie Meyer',
      'year' : '2009',
    },
    'Lord of the Flie': {
      'novelist': 'William Golding',
      'year' : '1990',
    }, 
    'Extremely Loud & Incredibly Clos': {
      'novelist': 'Jonathan Safran Foer',
      'year' : '2011',
    },
    'Harry Potter and the Deathly Hallows: Part 1': {
      'novelist': 'J. K. Rowling',
      'year' : '2010',
    },
    'Harry Potter and the Half-Blood Prince': {
      'novelist': 'J. K. Rowling',
      'year' : '2009',
    },
    'Harry Potter and the Order of the Phoenix': {
      'novelist': 'J. K. Rowling',
      'year' : '2007',
    },
    'Harry Potter and the Prisoner of Azkaban': {
      'novelist': 'J. K. Rowling',
      'year' : '2004',
    },
    'Harry Potter and the Deathly Hallows: Part 2': {
      'novelist': 'J. K. Rowling',
      'year' : '2011',
    },
    'Harry Potter and the Goblet of Fire': {
      'novelist':  'J. K. Rowling',
      'year' : '2005',
    },
    'Harry Potter and the Sorcerer is Stone': {
      'novelist': 'J. K. Rowling',
      'year' : '2001',
    },
    'Harry Potter and the Chamber of Secrets': {
      'novelist': 'J. K. Rowling',
      'year' : '2002',
    },
    'The Golden Compass': {
      'novelist': 'Philip Pullman',
      'year' : '2007',
    },
    'A Little Romance': {
      'novelist': 'A Little RomancePatrick Cauvin',
      'year' : '1979',
    },
    '100 Rifles': {
      'novelist': 'Robert MacLeods',
      'year' : '1969',
    }, 
    'The Hunger Games': {
      'novelist': 'Suzanne Collins',
      'year' : '2012',
    },
    'The Hunger Games: Catching Fire': {
      'novelist': 'Suzanne Collins',
      'year' : '2013',
    },
  }, 
  'Suspense': {
    '127 Hours': {
      'novelist': 'Danny Boyle y Simon Beaufoy',
      'year' : '2010',
    },
    'Fifty Shades of Grey': {
      'novelist': 'E. L. James',
      'year' : '2015',
    },
    'Wake': {
      'novelist': 'Alan Wake',
      'year' : '2012',
    },
    'The Host': {
      'novelist': 'Stephenie Meyer',
      'year' : '2013',
    }, 
    'The Hunger Games: Mockingjay - Part 2': {
      'novelist': 'Suzanne Collins',
      'year' : '',
    },
    'The Hunger Games: Mockingjay - Part 1': {
      'novelist': 'Suzanne Collins',
      'year' : '',
    },
    'The Forest of Hands and Teeth': {
      'novelist': 'Carrie Ryan',
      'year' : '2018',
    },
    'hiver': {
      'novelist': 'Maggie StiefvaterS',
      'year' : '2011',
    },
    'The Woman in Black': {
      'novelist': 'Susan Hill',
      'year' : '2012',
    },
    'Rise of the Guardians': {
      'novelist': 'William Joyce',
      'year' : '2012',
    },
    'Jack Reacher': {
      'novelist': 'Lee Child',
      'year' : '2012',
    },
    'The Last King of Scotland': {
      'novelist': 'Giles Foden',
      'year' : '2006',
    },
    'Zodiac': {
      'novelist': 'Robert Graysmith',
      'year' : '2007',
    }, 
    'No Country for Old Men': {
      'novelist': 'Cormac McCarthy',
      'year' : '2007',
    },
    'Gone Baby Gone': {
      'novelist': 'Dennis Lehane',
      'year' : '2007',
    },
    'I Am Legend': {
      'novelist': 'Richard Matheson',
      'year' : '2007',
    },
    '21': {
      'novelist': 'Joseph Finder',
      'year' : '2008',
    },
    'The Ghost Writer': {
      'novelist': 'Robert Harris',
      'year' : '2010',
    },
    'Shutter Island': {
      'novelist': 'Dennis Lehane',
      'year' : '2010',
    }, 
    'Green Zone': {
      'novelist': 'Rajiv Chandrasekaran',
      'year' : '2010',
    },
    'The Town': {
      'novelist': 'Chuck Hogan',
      'year' : '2010',
    },
    'The Lincoln Lawyer': {
      'novelist': 'Michael Connelly',
      'year' : '2011',
    }, 
    'We Need to Talk About Kevin': {
      'novelist': 'Lionel Shriver',
      'year' : '2011',
    },
    'Misery': {
      'novelist': 'Stephen King',
      'year' : '1990',
    },
    'The Mist': {
      'novelist': 'Stephen King',
      'year' : '2007',
    }, 
    'The Pelican Brief': {
      'novelist': 'John Grisham',
      'year' : '1993',
    },
    'The Lovely Bones': {
      'novelist': 'Alice Sebold',
      'year' : '2009',
    },
    'Rick Riordan': {
      'novelist': 'Percy Jackson: Sea of Monsters',
      'year' : '2013',
    },
    'Rick Riordan': {
      'novelist': 'Percy Jackson & the Olympians: The Lightning Thief',
      'year' : '2010',
    },
    'Lord of the Flie': {
      'novelist':  'William Golding',
      'year' : '1990',
    },
    'Extremely Loud & Incredibly Clos': {
      'novelist':  'Jonathan Safran Foer',
      'year' : '2011',
    },
    'Stephen King': {
      'novelist': 'The Green Mile',
      'year' : '1999',
    },
    'Luftslottet som sprängdes': {
      'novelist': 'Stieg Larsson',
      'year' : '2009',
    },
    'Flickan som lekte med elden': {
      'novelist': 'Stieg Larsson',
      'year' : '2009',
    },
    'Män som hatar kvinnor': {
      'novelist': 'Stieg Larsson',
      'year' : '2009',
    },
    'The Girl with the Dragon Tattoo': {
      'novelist': 'Stieg Larsson',
      'year' : '2011',
    },
    'The Da Vinci Code': {
      'novelist': 'Dan Brown',
      'year' : '2006',
    },
    'Angels & Demons': {
      'novelist': 'Dan Brown',
      'year' : '2009',
    },
    'The Hunger Games': {
      'novelist': 'Suzanne Collins',
      'year' : '2012',
    },
    'The Hunger Games: Catching Fire': {
      'novelist': 'Suzanne Collins',
      'year' : '2013',
    },
  }, 
};

// console.log(Object.keys(data));