//names of political journalists
var names = ['Justin Sink', 'Howard Fineman', 'Michelle Malkin', 'Paul Singer', 'Peggy Noonan', 'David Shepardson', 'Susan Joan Archer', 'Susan Page', 'Alex Leary', 'John Harwood', 'john r stanton', 'E!!', 'Michael Roston', 'Scott Wong', 'Amy Chozick', 'Arianna Huffington', 'Kevin Robillard', 'Juana Summers Markland', 'Paul Lewis', 'michaelscherer', 'Josh Hafner', 'Sean Hannity', 'SarahBakerNBC', 'Maeve Reston', 'Patricia DiCarlo', 'Ron Fournier', 'MATT DRUDGE', 'Max Fisher', 'Michael D. Shear', 'Christina Wilkie', 'Roger Simon', 'Frank Thorp V', 'Mike Allen', 'Madeline Marshall', 'HowardKurtz', "Mike O'Brien", 'Michael McAuliff', 'Steve Contorno', 'Chris Suellentrop', 'Anna Palmer', 'Jonathan Strong', 'Tom Curry', 'John Berman', 'Jamie Dupree', 'Adam Smith', 'Matt Lewis', 'Ann Coulter', 'Steven Shepard', 'Jon Ralston', 'Caroline Horn', 'Bill Keller', 'Michelle Jaconi', 'James Bennet', 'Russell Berman', 'Aaron Blake', 'Dan Balz', 'Jeffrey Young', 'Joe McQuaid', 'David S. Joachim', 'O. Kay Henderson', 'Julie Bosman', 'Ken Thomas', 'Matt Fuller', 'Reid J. Epstein', 'Reid Cherlin', 'Shawna Thomas', 'Steve Bousquet', 'Steve Benen', 'Kyle Kondik', 'John Bresnahan', 'Paul Kane', 'Jessica Yellin', 'Mark Benjamin', 'Alicia M. Cohn', 'Major Garrett', 'Ryan Lizza', 'Melinda Henneberger', 'Ben Jacobs', 'Josh Kraushaar', 'Glenn Greenwald', 'Jordan Fabian', 'Katie Smith Allen', 'Sam Stein', 'Abby D. Phillip', 'Bob Cohn', 'Patricia Murphy', 'Steven Portnoy', 'Dana Bash', 'Nicholas Jackson', 'Manu Raju', 'Julie Davis', 'Terry Moran', 'Michael Falcone', 'Dave Wasserman', 'Megan Carpentier', 'Andrew Rafferty', 'Marc Ambinder', 'lucy morgan', 'Bret Baier', 'Nick Valencia', 'Karen Tumulty', 'Jim Acosta', 'Arlette Saenz', 'George Bennett', 'Matt Stiles', 'amy walter', 'Scott Bland', 'Steve Sebelius', 'Dan Eggen', 'Shira T. Center', 'John Dickerson', 'Katharine Q. Seelye', 'Carrie Dann', 'Neda Semnani', 'Cameron Joseph', 'Jennifer Duffy', 'Chris Moody', 'Olivier Knox', 'Cook Political Report', 'Peter Hamby', 'Trish Turner', 'Walter Shapiro', 'Michael Hirsh', 'Philip Rucker', 'Neil King', 'carl hulse', 'Sara Murray', 'Jonathan Capehart', 'Byron Tau', 'Emily Pierce', 'Elahe Izadi', 'Matthew Daly', 'Melissa Harris-Perry', 'James Hohmann', 'Matt Vasilogambros', 'Elizabeth Titus', 'Kasie Hunt', 'Lisa Desjardins', 'Thomas DeFrank', 'Bob Cusack', 'Beth Reinhard', 'Jessica Taylor', 'Annie Karni', 'Michael C. Bender', 'Steven Ginsberg', 'Steve Peoples', 'David Wastell', 'Ann Curry', 'Josh', 'Lauren Fox', 'George Stephanopoulos', 'Daniel', 'Glenn Thrush', 'Larry Sabato', 'Jeremy W. Peters', 'Joshua Green', 'Betsy Fischer Martin', 'Steven Dennis', 'Rick Dunham', 'David Mark', 'Anderson Cooper', 'Reid Wilson', 'Rebecca Berg', 'Charles Krauthammer', 'Emma Dumain', 'Charles Dharapak', 'Phil Elliott', 'Jennifer Bendery', 'Jonathan Martin', 'Rick Klein', 'Amanda Muoz-Temple', 'Nate Silver', 'Mark Z. Barabak', 'AP Politics', 'Robert Yoon', 'Ali Rogin', 'devindwyer', 'Anjeanette Damon', 'Paul Krugman', 'Jeff Zeleny', 'Dave Levinthal', 'Henry C.J. Jackson', 'Tom Bevan', 'David A. Graham', 'Rachel Rose Hartman', 'John Gizzi', 'Jeremy P. Jacobs', 'Amy Gardner', 'Kate Nocera', 'Eliot Nelson', 'Bob Schieffer', 'Mark Murray', 'Dan Merica', 'Michael Crowley', 'Jose A. Del Real', "P. J. O'Rourke", 'Holly Ramer', 'Shannon Travis', 'Marin Cogan', 'Adam Wollner', 'Perry Bacon Jr.', 'Taegan Goddard', 'Ted Bridis', 'Jill Abramson', 'Patrick W. Gavin', 'Jo Ling Kent', 'David Nakamura', 'Deirdre Walsh', 'Caitlin Huey-Burns', 'Joe Scarborough', 'Natalie Jennings', 'Dan Nowicki', 'Kevin Brennan', 'Susan Davis', 'Amie Parnes', 'Ron Lieber', 'Rosalind Helderman', 'bonney', 'Kenneth P. Vogel', 'Rachel Streitfeld', 'Matthew Keys', 'Felix Salmon', 'Alex Parker', 'Maggie Haberman', 'Benny', 'CNN Political Ticker', 'andrew kaczynski', 'Erin McPike', 'Dan Hirschhorn', 'Domenico Montanaro', 'Leslie Larson Caimi', 'Amy Harder', 'Donna Brazile', 'Dylan Byers', 'Katie Zezima', "Ed O'Keefe", 'Alex Roarty', 'Dan Berman', 'AnnGerhart', 'Julie Mason', 'Dan Lothian', 'Patrick LaForge', 'Maggie', 'David M. Drucker', "Adam O'Neal", 'Laura E. Davis', 'Kevin Bohn', 'Ed Henry', 'Nathan Gonzales', 'Adam B. Kushner', 'Alexis Simendinger', 'Megyn Kelly', 'Alexandra Jaffe', 'Rachel Maddow MSNBC', 'Matt Wuerker', 'Aaron Gould Sheinin', 'Troy Kinsey', 'Peter Baker', 'Jenny Blanco', 'Gregg Birnbaum', 'Josh Gerstein', 'Terence Samuel', 'Burgess Everett', 'Charlie Mahtesian', 'Dana Perino', 'Emily Heil', 'Jamie Kirchick', 'Megan McArdle', 'Susan Ferrechio', 'Wolf Blitzer', 'melissa block', 'Jamie Gray', 'Kathie Obradovich', 'Shushannah Walshe', 'PETER MAER', 'Jonathan Allen', 'Ed Hornick', 'Ethan Klapper', 'Carl Cannon', 'Tim Alberta', 'Robert Costa', 'Carol Lee', 'Gabriel Debenedetti', 'Todd Zwillich', 'Anita Kumar', 'Matt Viser', 'Jeffrey Goldberg', 'George Condon', 'Donovan Slack', 'Josh Lederman', 'Alex Brown', 'Jordan J Frasier', "Patrick O'Connor", 'Beth Fouhy', 'Jason Horowitz', 'McKay Coppins', 'Kathleen Hennessey', 'Dick Stevenson', 'Chris Licht', 'Jim Roberts', 'Savannah Guthrie', 'Vaughn Sterling', 'Greta Van Susteren', 'Andrew Malcolm', 'Marty Kady', 'Andrea Mitchell', 'Niels Lesniewski', 'Chris Cillizza', 'Dana Milbank', 'Julie Pace', 'Taylor West', 'Colleen Nelson', 'Joe Hagan', 'Nick Corasaniti', 'Christian Heinze', 'Holly Bailey', 'Karen Travers', 'Dave Weigel', 'Mark Joyella', 'Tim Grieve', 'David Freedlander', 'Emma V. Angerer', 'David Muir', 'Tom Diemer', 'Eamon Javers', 'Eliza Newlin Carney', 'Michael Barbaro', 'Adriel Bettelheim', 'Aman Batheja', 'Edward-Isaac Dovere', 'Jan Crawford', 'David Catanese', 'Emily C. Singer', 'Molly Ball', 'Glenn Beck', 'Gabriel Sherman', 'Carol Costello', 'Mike Memoli', 'michael viqueira', "John O'Connor", 'Mark Preston', 'Judy Kurtz', 'Chris Stirewalt', 'Jesse Rodriguez', 'Sean Geary Higgins', 'Jennifer Epstein', 'Garance Franke-Ruta', 'Hadas Gold', 'Lauren Whittington', 'Jonathan Karl', 'jodikantor', 'Brianna Keilar', 'Fareed Zakaria', 'JonathanWeisman', 'Jamie Novogrod', 'Mark Leibovich', 'Lloyd Grove', 'ryan teague beckwith', 'Stephanie Ebbert', 'Jill Jackson', 'Chuck Todd', 'Alex Burns', 'Alex Bolton', 'Ashley Parker', 'Rebecca Shabad', 'Jonathan Easley', 'NYT Politics', 'Mark Halperin', 'David Leonhardt', 'Abby Livingston', 'Patricia Zengerle', "Kelly O'Donnell", 'Lauren S. Camera', 'Scott Wilson', 'Alex Pappas', 'Marc Fortier', 'Ben Adler', 'Alexander Mooney', 'Paul Steinhauser', 'Sam Youngman', 'Alex Moe', 'Scott Conroy', 'Jill Lawrence', 'Jenna Sakwa', 'National Journal', 'Luke Russert', 'Mike Barnicle', 'Jennifer Jacobs', 'Jake Sherman', 'Chris Hayes', 'Sean Sullivan', 'David Chalian', 'Felicia Sonmez', 'Peter Foster', 'Jake Tapper', 'Stuart Rothenberg', 'Ben Leubsdorf', 'Marc Caputo', 'Sarah Huisenga', 'Mark Knoller', 'Adam Beam', "Bill O'Reilly", 'James Pindell', 'Meredith Shiner', 'Mackenzie Weinger', 'Julie Sobel', 'Jay Newton-Small', 'Glen Johnson', 'Rebecca Kaplan', 'Brooke Brower', '2016 Iowa Caucuses', 'Nikole Killion', 'Jackie Kucinich', 'Ben Smith', 'Chad Pergram', 'Kate Tummarello', 'Jim Geraghty', 'Emily Schultheis', 'Christiane Amanpour', 'Jon Resnick DJI', 'jimrutenberg', 'jack healy', 'Steve Holland', 'Pema Levy', 'Nick Confessore', 'Drew Cline', 'Ginger Gibson', "Norah O'Donnell", 'Sarah Mimms', 'Ryan Murphy', 'Lisa Lerer', 'Zeke Miller'];
var influential = ['Matt Drudge', 'Ann Coulter', 'Megyn Kelly', 'Maggie Haberman', 'Andrea Mitchell', 'Wolf Blitzer', 'Christiane Amanpour', 'Donna Brazile', 'Fareed Zakaria', 'Sean Hannity', 'Mark Knoller', 'Charles Krauthammer', 'Dana Perino', "Bill O'Reilly", 'Arianna Huffington', 'Joe Scarborough', "Norah O'Donnell", 'Ann Curry', 'David Frum', 'Jonathan Martin', 'Bret Baier', 'Ezra Klein', 'Melissa Harris-Perry', 'Glenn Beck', 'GeorgeStephanopoulos', 'Paul Krugman', 'Nicholas Kristof', 'Ed Henry', 'Rachel Maddow MSNBC', 'Glenn Greenwald', 'Greta Van Susteren', 'Michelle Malkin', 'HowardKurtz', 'Sam Stein', 'Anderson Cooper', 'Jake Tapper', 'Brian Stelter', 'Andrew Malcolm', 'Chris Cillizza', 'Mike Allen', 'Dave Weigel', 'Ben Smith', 'Dana Loesch', 'Chris Hayes'];

//helper functions that operate on the input tree (not the generated one)
var height = function(a){
	if (a["children"].length == 0) return 1;
	else return 1 + Math.max(height(a["children"][0]), height(a["children"][1]));
}

function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

function hasChildren(node){
  return node["children"].length != 0
}

//used for assigning ID's
var counter = 0;

//preprocessing to transform tree to fit d3 layout algorithm
var processData = function(a) {
	var children = a['children'];
	if (children.length == 0){
		var id = "item"+(a["items"][0]).toString();
		return {
			"children" : a["children"],
			"id": id,
      "data":{
        "id": id,
        "people": a["items"]
      }
		};
	} else {
		var id = "cluster"+counter.toString();
		counter += 1;
		return {
			"children" : flatten(children.map(processData)),
			"id": id,
      "data":{
        "id": id,
        "people":a["items"]
      }
		};			
	}
}

//recursive tree shrinking algorithm
var reshapeTree = function(t){
  var children = t['children'];
  if (children.length == 0){ return t; }
  else {
    var c1 = reshapeTree(children[0]);
    var c2 = reshapeTree(children[1]);
    if (c1["children"].length == 0 && c2["children"].length == 0){
      return t;
    }
    else if (c1["children"].length == 0){
      var temp = c2["children"];
      temp.push(c1);
      return {"items": t.items, "children":temp};
    }
    else if (c2["children"].length == 0){
      var temp = c1["children"];
      temp.push(c2);
      return {"items": t.items, "children":temp};
    }
    else{ return {"items": t.items, "children":[c1,c2]}}
  } 
}

var svg; 
var tree;
var sizeScale = d3.scaleSqrt().domain([1,450]).range([1.5,25]);
var selected;
var currentType = "tree";


function project(x, y) {
  var angle = (x - 90) / 180 * Math.PI, radius = y;
  return [radius * Math.cos(angle), radius * Math.sin(angle)];
}

//displays the data of the cluster in the sidebar
function display(data){
  var top = document.getElementById("infoTop");
  var bottom = document.getElementById("infoBottom");
  var size = data.people.length;
  var people = data.people.map(function(x){
    var name = names[x];
    if (influential.includes(name)) {
      return " <span style = 'font-weight:bold'>"+ name + "</span>";
    } else {
      return " " + name;
    }
  });
  people.sort(function(a,b){return b.length - a.length});
  top.innerHTML = "<span style = 'font-style:italic'>Size of Cluster:</span> "+size.toString();
  bottom.innerHTML = "<span style = 'font-style:italic'>People in Cluster (bold = more influential):</span><br>" + people.toString();    
}

//handles when a node is selected
var selectHelper = function(d){
  var id = d["data"]["data"]["id"].toString();
  if (selected != id) {
    selected = id;
    d3.selectAll("circle").attr("fill","#777");
    d3.select("#"+id).attr("fill","maroon");
    if (d.children){
      for (var i = 0; i<d.children.length; i++){
        var id2 = d.children[i]["data"]["data"]["id"].toString();
        d3.select("#"+id2).attr("fill","red");
      }              
    }
  } else {
    selected = undefined;
    d3.selectAll("circle").attr("fill","#777");
  }
  display(d["data"]["data"]);          
}

//main draw function
function draw(type){
  var clustertype;
  if (type == "tidytree" || type == "tidyradial"){clustertype = d3.cluster}
  else {clustertype = d3.tree}
  //NORMAL DENDROGRAM
  if (type == "tree" || type == "tidytree"){
    svg = d3.select("svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height"),
        g = svg.append("g").attr("transform", "translate(40,0)");

    tree = clustertype()
    .size([height, width - 160]);
  } else {
  //RADIAL DENDROGRAM
    svg = d3.select("svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height"),
        g = svg.append("g").attr("transform", "translate(" + (width / 2 - 25) + "," + (height / 2 -50) + ")");

    tree = clustertype()
        .size([350, 350])
        .separation(function(a, b) { return (a.parent == b.parent ? 5 : 10); });
  }

  d3.json('res.json', function(error, data){
    if (error) throw error;

    var root = d3.hierarchy(processData(reshapeTree(data[0])));
    tree(root);
    var link, node;
    if (type == "tree" || type == "tidytree"){
      //NORMAL DENDROGRAM
      link = g.selectAll(".link")
          .data(root.descendants().slice(1))
        .enter().append("path")
          .attr("class", "link")
          .attr("d", function(d) {
            return "M" + d.y + "," + d.x
                + "C" + (d.parent.y) + "," + d.x
                + " " + (d.parent.y) + "," + d.parent.x
                + " " + d.parent.y + "," + d.parent.x;
          });

      node = g.selectAll(".node")
          .data(root.descendants())
        .enter().append("g")
          .attr("class", function(d) { return "node" + (d.children ? " node--internal" : " node--leaf"); })
          .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })

      node.append("circle")
          .attr("id", function(d){return d["data"]["data"]["id"];})
          .attr("r", function(d){
            return sizeScale(d["data"]["data"]["people"].length);
          })
          .attr("fill", "#777")
          .attr("opacity", 0.9)
          .on("click", selectHelper); 
      g.attr("transform","rotate(90),translate(25,-900)"); 
    } else {
      //RADIAL DENDROGRAM
        link = g.selectAll(".link")
          .data(root.descendants().slice(1))
          .enter().append("path")
            .attr("class", "link")
            .attr("d", function(d) {
              return "M" + project(d.x, d.y)
                  + "C" + project(d.x, (d.y + d.parent.y) / 2)
                  + " " + project(d.parent.x, (d.y + d.parent.y) / 2)
                  + " " + project(d.parent.x, d.parent.y);
            });

        node = g.selectAll(".node")
          .data(root.descendants())
          .enter().append("g")
            .attr("class", function(d) { return "node" + (d.children ? " node--internal" : " node--leaf"); })
            .attr("transform", function(d) { return "translate(" + project(d.x, d.y) + ")"; });

        node.append("circle")
          .attr("id", function(d){return d["data"]["data"]["id"];})
          .attr("r", function(d){
              return sizeScale(d["data"]["data"]["people"].length)
            })
          .attr("fill", "#777")
          .attr("opacity", 0.9)
          .on("click", selectHelper); 
    }    
  });
}

//initial call to draw tree
draw("tree");

//radio button listeners
var radios = document.forms["selectType"].elements["mode"];

for(var i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function() {
        svg.selectAll("*").remove();
        currentType = this.id;
        selected = undefined;
        draw(this.id);
    }
}
