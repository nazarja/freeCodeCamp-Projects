// Init
const projectsList = document.querySelector('#projects-list');

/*****
*  Projects Object
 *****/
const projects = {
    Featured: [
        {
            name: 'Build a JS & CSS Photo Editor',
            image: './images/projects/Featured/photo_editor.png',
            link: 'http://seanmurphy.eu/photo-editor',
            'technologies': ['Javascript', 'CSS', 'HTML']
        },
        {
            name: 'Build the Game "Breakout" ',
            image: './images/projects/Featured/breakout_game.png',
            link: 'http://seanmurphy.eu/breakout-game',
            'technologies': ['Javascript', 'CSS', 'HTML']
        }, 
        {
            name: 'Visualize Global Data with a Heatmap',
            image: './images/projects/DataVisualization/heatmap.png',
            link: 'http://seanmurphy.eu/heatmap',
            'technologies': ['D3', 'JSON']
        },
        {
            name: 'Build a Recipe Box',
            image: './images/projects/ReactJS/recipe_box.png',
            link: 'http://seanmurphy.eu/recipe-box',
            'technologies': ['React', 'Node', 'Local Storage']
        },
        {
            name: 'Build a Weather App',
            image: './images/projects/FrontEndLibraries/weather_app.png',
            link: 'http://seanmurphy.eu/weather-app',
            'technologies': ['Javascript', 'JSON', 'Web API']
        },
        {
            name: 'Image Search Abstraction Layer',
            image: './images/projects/APIsAndMicroservices/image_search_abstraction_layer.png',
            link: 'https://sm-image-search-abstraction-layer.glitch.me/',
            'technologies': ['Node', 'Express', 'MongoDB', 'Web API']
        }
    ],
    ResponsiveWebDesign: [
        {
            name: 'Build a Product Landing Page',
            image: './images/projects/ResponsiveWebDesign/product_landing_page.png',
            link: 'http://seanmurphy.eu/product-landing-page',
            'technologies': ['Javascript', 'CSS', 'HTML']
        },
        {
            name: 'Build a Survey Form',
            image: './images/projects/ResponsiveWebDesign/survey_form.png',
            link: 'http://seanmurphy.eu/survey-form',
            'technologies': ['Javascript', 'CSS', 'HTML']
        },
        {
            name: 'Build a Technical Documentation Page',
            image: './images/projects/ResponsiveWebDesign/technical_documentation_page.png',
            link: 'http://seanmurphy.eu/technical-documentation-page',
            'technologies': ['Javascript', 'CSS', 'HTML']
        },
        {
            name: 'Build a Tribute Page',
            image: './images/projects/ResponsiveWebDesign/tribute_page.png',
            link: 'http://seanmurphy.eu/tribute-page',
            'technologies': ['Javascript', 'CSS', 'HTML']
        }
    ],
    FrontEndLibraries: [
        {
            name: 'Build a Random Quote Machine',
            image: './images/projects/FrontEndLibraries/random_quote_machine.png',
            link: 'http://seanmurphy.eu/random-quote-machine',
            'technologies': ['jQuery', 'JSON', 'Web API']
        },
        {
            name: '(New) Random Quote Machine',
            image: './images/projects/FrontEndLibraries/new_random_quote_machine.png',
            link: 'http://seanmurphy.eu/new-random-quote-machine',
            'technologies': ['Javascript', 'SCSS', 'Web API']
        },
        {
            name: 'Build a Markdown Previewer',
            image: './images/projects/FrontEndLibraries/markdown_previewer.png',
            link: 'http://seanmurphy.eu/markdown-previewer',
            'technologies': ['React', 'Markdown']
        },
        {
            name: 'Build a Drum Machine',
            image: './images/projects/FrontEndLibraries/drum_machine.png',
            link: 'http://seanmurphy.eu/drum-machine',
            'technologies': ['React', 'Sass']
        },
        {
            name: 'Build a JavaScript Calculator',
            image: './images/projects/FrontEndLibraries/calculator.png',
            link: 'http://seanmurphy.eu/calculator',
            'technologies': ['Javascript']
        },
        {
            name: 'Build a React Calculator',
            image: './images/projects/FrontEndLibraries/react_calculator.png',
            link: 'http://seanmurphy.eu/react-calculator',
            'technologies': ['React', 'Sass', 'Mathjs']
        },
        {
            name: 'Build a Pomodoro Clock',
            image: './images/projects/FrontEndLibraries/react_pomodoro_clock.png',
            link: 'http://seanmurphy.eu/pomodoro-clock',
            'technologies': ['React', 'Sass']
        },
        {
            name: 'Build a Weather App',
            image: './images/projects/FrontEndLibraries/weather_app.png',
            link: 'http://seanmurphy.eu/weather-app',
            'technologies': ['Javascript', 'JSON', 'Web API']
        },
        {
            name: 'Build a Simon Game',
            image: './images/projects/FrontEndLibraries/simon_game.png',
            link: 'http://seanmurphy.eu/',
            'technologies': ['Javascript']
        },
        {
            name: 'Build a Wikipedia Viewer',
            image: './images/projects/FrontEndLibraries/wikipedia_viewer.png',
            link: 'http://seanmurphy.eu/',
            'technologies': ['Javascript', 'JSON', 'Web API']
        }
    ],
    DataVisualization: [
        {
            name: 'Map Data with a Bar Chart',
            image: './images/projects/DataVisualization/bar_chart.png',
            link: 'http://seanmurphy.eu/bar-chart',
            'technologies': ['D3', 'JSON']
        },
        {
            name: 'National Contiguity - Force Directed Graph',
            image: './images/projects/DataVisualization/force_directed_graph.png',
            link: 'http://seanmurphy.eu/force-directed-graph',
            'technologies': ['D3', 'JSON']
        },
        {
            name: 'Visualize Global Data with a Heatmap',
            image: './images/projects/DataVisualization/heatmap.png',
            link: 'http://seanmurphy.eu/heatmap',
            'technologies': ['D3', 'JSON']
        },
        {
            name: 'Map Meteroite Data Across the Globe',
            image: './images/projects/DataVisualization/map_global_data.png',
            link: 'http://seanmurphy.eu/map-global-data',
            'technologies': ['D3', 'JSON']
        },
        {
            name: 'Visualize Data with a Scatterpot Graph',
            image: './images/projects/DataVisualization/scatterplot_graph.png',
            link: 'http://seanmurphy.eu/scatterplot-graph',
            'technologies': ['D3', 'JSON']
        },
        {
            name: 'Visualize Data with a Choropleth Map',
            image: './images/projects/DataVisualization/choropleth_map.png',
            link: 'http://seanmurphy.eu/choropleth-map',
            'technologies': ['D3', 'JSON']
        },
        {
            name: 'Visualize Data with a Treemap Diagram',
            image: './images/projects/DataVisualization/treemap_diagram.png',
            link: 'http://seanmurphy.eu/treemap-diagram',
            'technologies': ['D3', 'JSON']
        }
    ],
    ApisAndMicroservices: [
        {
            name: 'Build a Timestamp Microservice',
            image: './images/projects/APIsAndMicroservices/timestamp_microservice.png',
            link: 'https://sm-timestamp-microservice.glitch.me/',
            'technologies': ['Node', 'Express']
        },
        {
            name: 'Build a Request Header Parser Microservice',
            image: './images/projects/APIsAndMicroservices/request_header_parser.png',
            link: 'https://sm-request-header-parser-microservice.glitch.me/',
            'technologies': ['Node', 'Express']
        },
        {
            name: 'Build a URL Shortener Microservice',
            image: './images/projects/APIsAndMicroservices/url_shortener.png',
            link: 'https://sm-url-microservice.glitch.me/',
            'technologies': ['Node', 'Express', 'MongoDB', 'url-valid']
        },
        {
            name: 'Image Search Abstraction Layer',
            image: './images/projects/APIsAndMicroservices/image_search_abstraction_layer.png',
            link: 'https://sm-image-search-abstraction-layer.glitch.me/',
            'technologies': ['Node', 'Express', 'MongoDB', 'Web API']
        },
        {
            name: 'File Metadata Microservice',
            image: './images/projects/APIsAndMicroservices/file_metadata_microservice.png',
            link: 'https://sm-file-metadata.glitch.me/',
            'technologies': ['Node', 'Express', 'MongoDB', 'multer']
        },
        {
            name: 'Build an Exercise Tracker',
            image: './images/projects/APIsAndMicroservices/exercise_tracker.png',
            link: 'https://sm-exercise-tracker.glitch.me/',
            'technologies': ['Node', 'Express', 'MongoDB', 'Mongoose']
        }
    ],
    InformationSecurityAndQualityAssurance: [],
    ReactJS: [
        {
            name: 'Build a Github Style Markdown Previewer',
            image: './images/projects/ReactJS/markdown_previewer.png',
            link: 'http://seanmurphy.eu/markdown-previewer',
            'technologies': ['React', 'Node', 'Markdown']
        },
        {
            name: 'Build a Camper Leaderboard',
            image: './images/projects/ReactJS/camper_leaderboard.png',
            link: 'http://seanmurphy.eu/camper-leaderboard',
            'technologies': ['React', 'Node', 'AJAX']
        },
        {
            name: 'Build Conway\'s Game of Life',
            image: './images/projects/ReactJS/conways_game_of_life.png',
            link: 'http://seanmurphy.eu/game-of-life',
            'technologies': ['React', 'Node']
        },
        {
            name: 'Build a Recipe Box',
            image: './images/projects/ReactJS/recipe_box.png',
            link: 'http://seanmurphy.eu/recipe-box',
            'technologies': ['React', 'Node', 'Local Storage']
        },
        {
            name: 'Build a Rougelike Dungeon Crawler Game',
            image: './images/projects/ReactJS/roguelike_dungeon_crawler.png',
            link: 'http://seanmurphy.eu/roguelike-dungeon-crawler',
            'technologies': ['React', 'Node', 'Phaser']
        },
        {
            name: 'Build a React Calculator',
            image: './images/projects/ReactJS/react_calculator.png',
            link: 'http://seanmurphy.eu/react-calculator',
            'technologies': ['React', 'Sass', 'Mathjs']
        },
        {
            name: 'Build a Pomodoro Clock',
            image: './images/projects/ReactJS/react_pomodoro_clock.png',
            link: 'http://seanmurphy.eu/pomodoro-clock',
            'technologies': ['React', 'Sass']
        },
        {
            name: 'Build a React Drum Machine',
            image: './images/projects/ReactJS/drum_machine.png',
            link: 'http://seanmurphy.eu/drum-machine',
            'technologies': ['React', 'Sass']
        }
    ]
}

 

 /*****
  *  Click Event Listener to Nav
  *****/
const projectsNav = document.querySelectorAll('.projects-nav li');
projectsNav.forEach(nav => {
    nav.onclick = changeActiveProjects;
});



/*****
 *  Change Project Type
  *****/
function changeActiveProjects(nav) {

    // Change 'Active' State
    projectsNav.forEach(item => {
        if(item.id == 'active') {
            item.removeAttribute('id')
        }
    });
    nav.target.id = 'active';
    changeProjects(nav.target.className);
}



/*****
 *  Change Projects
  *****/
 function changeProjects(item) {
    const nav = projects[item];

    // If project list is empty
    if (nav.length === 0) return noprojects();

    // Remove Child Elements
    while (projectsList.hasChildNodes()) {
        projectsList.removeChild(projectsList.lastChild);
    }

    nav.map(project => {

        // Create link to contain Div
        let link = document.createElement('a');
        link.href = project.link;
        link.target = '_blank';
        link.className =  'project-link';

        // Main Containing Div
        let div = document.createElement('div');
        div.className = 'project-tile';



        // Div 1
        let div1 = document.createElement('div');
        div1.className = 'project-div1';
        
        // Project Image
        let image = document.createElement('img');
        image.src = project.image;
        div1.append(image);

        // Project Gradient
        let gradient = document.createElement('div');
        gradient.className = "project-gradient";
        div1.append(gradient);



        // Div 2
        let div2 = document.createElement('div');
        div2.className = 'project-div2';

        // Project Name
        let name = document.createElement('h4');
        name.innerHTML = project.name;
        div2.appendChild(name);


        //Projet Technologies Used
        let technologies = document.createElement('ul');
        technologies.className = 'project-technologies';
        for (let i in project.technologies) {
            let li = document.createElement('li');
            li.innerHTML = project.technologies[i];
            technologies.append(li);
        }
        div2.append(technologies);

        // Animations
        div.onmouseenter = () => {
            gradient.style.background = 'rgba(0, 0, 0, 0.0)';
            image.style.transform = 'scale(1.6)';
        }
        div.onmouseleave = () => {
            image.style.transform = 'scale(1.2)';
            gradient.style.background = 'rgba(0, 0, 0, 0.225)';
        }

        // Append to Div
        div.append(div1);
        div.append(div2);
        link.append(div);
        projectsList.append(link);
    })
 }
changeProjects('Featured');




 /*****
 *  Empty Projects List
  *****/
function noprojects() {
    let emptyList = document.createElement('span');

    // Remove Child Elements
    while (projectsList.hasChildNodes()) {
        projectsList.removeChild(projectsList.lastChild);
    }

    // Add empty element
    emptyList.className = 'empty-list';
    emptyList.innerHTML = 'No Projects Yet';
    
    projectsList.appendChild(emptyList);
}

