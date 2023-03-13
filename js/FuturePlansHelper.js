class FeatureProject {
    constructor(name, description, status, url, image_url) {
        this.name = name;
        this.description = description;
        this.url = url;
        this.status = status;
        this.image_url = image_url;
    }

    getHtml() {
        return `<div class="project-card" style="background-image: linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url(${this.image_url});">
                    <div class="project-card-header">
                        <h2 class="project-card-title">${this.name}</h2>
                        <div class="project-card-status">
                            <span class="project-card-status-text"><strong>Status:</strong> ${this.status}</span>
                        </div>
                    </div>
                    <div class="project-card-body">
                        <p>
                            ${this.description}
                        </p>
                    </div>
                </div>`;
    }
}

// Init some example projects (with real images)
const featureProjects = [
    new FeatureProject('Project 1', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, asperiores.', 'In Progress', 'https://www.google.com', 'https://picsum.photos/1920/1080'),
    new FeatureProject('Project 2', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, asperiores.', 'In Progress', 'https://www.google.com', 'https://picsum.photos/1920/1081'),
    new FeatureProject('Project 3', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, asperiores.', 'In Progress', 'https://www.google.com', 'https://picsum.photos/1920/1082'),
    new FeatureProject('Project 4', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, asperiores.', 'In Progress', 'https://www.google.com', 'https://picsum.photos/1920/1083'),
    new FeatureProject('Project 5', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, asperiores.', 'In Progress', 'https://www.google.com', 'https://picsum.photos/1920/1084')
];
const projectsContainer = $('.future-plans-list');


updateProjects();

function updateProjects() {
    projectsContainer.empty();
    for (let i = 0; i < featureProjects.length; i++) {
        projectsContainer.append(featureProjects[i].getHtml());
    }
}

