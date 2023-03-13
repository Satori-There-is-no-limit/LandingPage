const projectSlider = $('.project-slider');
const sliderLeft = $('#slide-arrow-left');
const sliderRight = $('#slide-arrow-right');


class Project {
    constructor(name, description, link, id) {
        this.name = name;
        this.description = description;
        this.link = link;
        this.id = id;
    }

    getHtml(isMiddle = false) {
        if (isMiddle) {
            return `<div class="project-card middle" id="${this.id}">
                        <div class="project-card__content">
                            <h3 class="project-card__title">${this.name}</h3>
                            <p class="project-card__description">${this.description}</p>
                            <a href="${this.link}" class="project-card__link">View Project</a>
                        </div>
                    </div>`;
        }
        return `<div class="project-card" id="${this.id}">
                    <div class="project-card__content">
                        <h3 class="project-card__title">${this.name}</h3>
                        <p class="project-card__description">${this.description}</p>
                        <a href="${this.link}" class="project-card__link">View Project</a>
                    </div>
                </div>`;
    }
}

let projects = [
    new Project("Project 1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam luctus, nisi nisl aliquet nisl, eget aliquam nisl nunc vel mauris. Sed euismod, nunc sit amet aliquam luctus, nisi nisl aliquet nisl, eget aliquam nisl nunc vel mauris.", "https://www.google.com", "project-1"),
    new Project("Project 2", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam luctus, nisi nisl aliquet nisl, eget aliquam nisl nunc vel mauris. Sed euismod, nunc sit amet aliquam luctus, nisi nisl aliquet nisl, eget aliquam nisl nunc vel mauris.", "https://www.google.com", "project-2"),
    new Project("Project 3", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam luctus, nisi nisl aliquet nisl, eget aliquam nisl nunc vel mauris. Sed euismod, nunc sit amet aliquam luctus, nisi nisl aliquet nisl, eget aliquam nisl nunc vel mauris.", "https://www.google.com", "project-3"),
    new Project("Project 4", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam luctus, nisi nisl aliquet nisl, eget aliquam nisl nunc vel mauris. Sed euismod, nunc sit amet aliquam luctus, nisi nisl aliquet nisl, eget aliquam nisl nunc vel mauris.", "https://www.google.com", "project-4"),
    new Project("Project 5", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam luctus, nisi nisl aliquet nisl, eget aliquam nisl nunc vel mauris. Sed euismod, nunc sit amet aliquam luctus, nisi nisl aliquet nisl, eget aliquam nisl nunc vel mauris.", "https://www.google.com", "project-5"),
    new Project("Project 6", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam luctus, nisi nisl aliquet nisl, eget aliquam nisl nunc vel mauris. Sed euismod, nunc sit amet aliquam luctus, nisi nisl aliquet nisl, eget aliquam nisl nunc vel mauris.", "https://www.google.com", "project-6"),
    new Project("Project 7", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam luctus, nisi nisl aliquet nisl, eget aliquam nisl nunc vel mauris. Sed euismod, nunc sit amet aliquam luctus, nisi nisl aliquet nisl, eget aliquam nisl nunc vel mauris.", "https://www.google.com", "project-7"),
    new Project("Project 8", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam luctus, nisi nisl aliquet nisl, eget aliquam nisl nunc vel mauris. Sed euismod, nunc sit amet aliquam luctus, nisi nisl aliquet nisl, eget aliquam nisl nunc vel mauris.", "https://www.google.com", "project-8"),
    new Project("Project 9", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam luctus, nisi nisl aliquet nisl, eget aliquam nisl nunc vel mauris. Sed euismod, nunc sit amet aliquam luctus, nisi nisl aliquet nisl, eget aliquam nisl nunc vel mauris.", "https://www.google.com", "project-9"),
    new Project("Project 10", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam luctus, nisi nisl aliquet nisl, eget aliquam nisl nunc vel mauris. Sed euismod, nunc sit amet aliquam luctus, nisi nisl aliquet nisl, eget aliquam nisl nunc vel mauris.", "https://www.google.com", "project-10"),
    new Project("Project 11", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam luctus, nisi nisl aliquet nisl, eget aliquam nisl nunc vel mauris. Sed euismod, nunc sit amet aliquam luctus, nisi nisl aliquet nisl, eget aliquam nisl nunc vel mauris.", "https://www.google.com", "project-11"),
    new Project("Project 12", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam luctus, nisi nisl aliquet nisl, eget aliquam nisl nunc vel mauris. Sed euismod, nunc sit amet aliquam luctus, nisi nisl aliquet nisl, eget aliquam nisl nunc vel mauris.", "https://www.google.com", "project-12"),
    new Project("Project 13", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam luctus, nisi nisl aliquet nisl, eget aliquam nisl nunc vel mauris. Sed euismod, nunc sit amet aliquam luctus, nisi nisl aliquet nisl, eget aliquam nisl nunc vel mauris.", "https://www.google.com", "project-13"),
    new Project("Project 14", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam luctus, nisi nisl aliquet nisl, eget aliquam nisl nunc vel mauris. Sed euismod, nunc sit amet aliquam luctus, nisi nisl aliquet nisl, eget aliquam nisl nunc vel mauris.", "https://www.google.com", "project-14"),
    new Project("Project 15", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam luctus, nisi nisl aliquet nisl, eget aliquam nisl nunc vel mauris. Sed euismod, nunc sit amet aliquam luctus, nisi nisl aliquet nisl, eget aliquam nisl nunc vel mauris.", "https://www.google.com", "project-15"),
    new Project("Project 16", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam luctus, nisi nisl aliquet nisl, eget aliquam nisl nunc vel mauris. Sed euismod, nunc sit amet aliquam luctus, nisi nisl aliquet nisl, eget aliquam nisl nunc vel mauris.", "https://www.google.com", "project-16")
];

let pointer = 0;

$(projectSlider).ready(function () {
    // init 3 cards, starting from pointer
    for (let i = 0; i < 3; i++) {
        if (pointer >= projects.length) {
            pointer = 0;
        }
        if (i === 1) {
            projectSlider.append(projects[pointer].getHtml(true));
        } else {
            projectSlider.append(projects[pointer].getHtml());
        }
        pointer++;
    }
    for (let i = 0; i < projects.length + 3; i++) {
        sliderLeft.click();
    }
});

sliderRight.click(function () {
    const left = $(projectSlider).children()[2];
    const middle = $(projectSlider).children()[3];
    const right = $(projectSlider).children()[4];

    middle.classList.remove('middle');
    right.classList.add('middle');
    left.remove();

    if (pointer <= projects.length - 1) {
        projectSlider.append(projects[pointer].getHtml());
        pointer++;
        return;
    }
    pointer = 0;
    projectSlider.append(projects[pointer].getHtml());
    pointer++;
});

sliderLeft.click(function () {
    const left = $(projectSlider).children()[2];
    const middle = $(projectSlider).children()[3];
    const right = $(projectSlider).children()[4];

    middle.classList.remove('middle');
    left.classList.add('middle');
    right.remove();

    pointer--;
    if (pointer < 0) {
        pointer = projects.length - 1;
    }
    const newProject = projects[pointer];
    $(projectSlider).children().eq(2).before(newProject.getHtml());
});

