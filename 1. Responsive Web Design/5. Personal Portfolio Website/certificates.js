/*******
 *  Certificates
 *******/
const certs = {
    baseDir: './images/certificates/',
    certificates: [
        {
            educator: 'FreeCodeCamp',
            logo: 'freecodecamp.png',
            name: 'Information Security and Quality Assurance',
            image: 'Information_Security_And_Quality_Assurance.png',
            issued: 'Issued July 11, 2018',
            link: 'https://www.freecodecamp.org/certification/nazarja/information-security-and-quality-assurance'
        },
        {
            educator: 'FreeCodeCamp',
            logo: 'freecodecamp.png',
            name: 'Data Visualization',
            image: 'Data_Visualization.png',
            issued: 'Issued July 11, 2018',
            link: 'https://www.freecodecamp.org/certification/nazarja/data-visualization'
        },
        {
            educator: 'FreeCodeCamp',
            logo: 'freecodecamp.png',
            name: 'Front End Libraries',
            image: 'Front_End_Libraries.png',
            issued: 'Issued July 7, 2018',
            link: 'https://www.freecodecamp.org/certification/nazarja/front-end-libraries'
        },
        {
            educator: 'FreeCodeCamp',
            logo: 'freecodecamp.png',
            name: 'Responsive Web Design',
            image: 'Responsive_Web_Design.png',
            issued: 'Issued June 25, 2018',
            link: 'https://www.freecodecamp.org/certification/nazarja/responsive-web-design'
        },
        {
            educator: 'FreeCodeCamp',
            logo: 'freecodecamp.png',
            name: 'APIs and Microservices',
            image: 'APIs_and_Microservices.png',
            issued: 'Issued June 14, 2018',
            link: 'https://www.freecodecamp.org/certification/nazarja/apis-and-microservices'
        },
        {
            educator: 'Udacity',
            logo: 'udacity.png',
            name: 'Mobile Web Specialist Nanodegree',
            image: 'Mobile_Web_Specialist.png',
            issued: 'Issued June 11, 2018',
            link: 'https://graduation.udacity.com/confirm/YDLGKETD'
        },
        {
            educator: 'FreeCodeCamp',
            logo: 'freecodecamp.png',
            name: 'Algorithms and Data Structures',
            image: 'Algorithms_and_Data_Structures.png',
            issued: 'Issued May 31, 2018',
            link: 'https://www.freecodecamp.org/certification/nazarja/javascript-algorithms-and-data-structures'
        },
        {
            educator: 'FreeCodeCamp',
            logo: 'freecodecamp.png',
            name: 'Legacy Data Visualization Program',
            image: 'Legacy_Data_Visualization.png',
            issued: 'Issued March 11, 2018',
            link: 'https://www.freecodecamp.org/certification/nazarja/legacy-data-visualization'
        },
        {
            educator: 'FreeCodeCamp',
            logo: 'freecodecamp.png',
            name: 'Legacy Front End Development Program',
            image: 'Legacy_Front_End_Development.png',
            issued: 'Issued July 13, 2017',
            link: 'https://www.freecodecamp.org/certification/nazarja/legacy-front-end'
        },
        {
            educator: 'Adobe',
            logo: 'adobe.png',
            name: 'Adobe Certified Associate in Visual Communication Using Adobe Photoshop',
            image: 'Photoshop_ACA.png',
            issued: 'Issued June 16, 2016',
            link: 'https://www.youracclaim.com/badges/6e629d04-8be0-4d9c-b1d6-a28fe195c8c6/linked_in_profile?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BXAX6P7DPTmyZWawJKp2mRg%3D%3D'
        }
    ]
};



const certicates = document.querySelector('#certicates');
const numberOfCerts = document.querySelector('#numberOfCerts').innerText = certs.certificates.length;
certs.certificates.map(cert => {

    // Create Divs
    let div = document.createElement('div');
    let certDiv1 = document.createElement('div');
    certDiv1.id = "certDiv1";
    let certDiv2 = document.createElement('div');
    certDiv2.id = "certDiv2";

    // HR's
    let hr = document.createElement('hr');
    hr.className = 'hr-certificates';
    div.append(hr);

    // Logo
    let logo = document.createElement('img');
    logo.src = certs.baseDir+cert.logo;
    logo.alt = `${cert.educator} logo`;
    certDiv1.append(logo);

    // Certifiicate Image
    let image = document.createElement('img');
    image.src = certs.baseDir+cert.image;
    image.alt = `${cert.name} certicate`;
    image.className = 'cert-image';
    certDiv1.append(image);

    // Certificate Name
    let name = document.createElement('h4');
    name.innerHTML = cert.name;
    certDiv2.append(name);

    // Issued Date
    let issued = document.createElement('p');
    issued.innerHTML = cert.issued; 
    issued.className = 'cert-issued';
    certDiv2.append(issued);

    // Description
    let educator = document.createElement('p');
    educator.innerHTML =  cert.educator;
    educator.className = 'cert-educator';
    certDiv2.append(educator);


    // Certificate Link
    let link = document.createElement('a');
    link.innerHTML = 'Confirm Certificate';
    link.href = cert.link;
    link.target = '_blank';
    link.className = 'cert-confirm';
    certDiv2.append(link);


    // Append
    div.append(certDiv1);
    div.append(certDiv2);
    certificates.append(div);
})