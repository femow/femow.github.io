var about = {
    anchor: null,
    div: null
}
var skills = {
    anchor: null,
    div: null
}
var projects = {
    anchor: null,
    div: null
}
var contact = {
    anchor: null,
    div: null
}

var lastTag;
var onAnimation = false;

document.addEventListener('DOMContentLoaded', () => {
    const anchors = document.getElementById("anchors");

    about.anchor = anchors.children[0];
    about.anchor.onclick = e => onClickAnchor(e, "about");
    about.div = document.getElementById("about")
    about.div.onanimationend = () => onEndAnimHandler(about)
    
    skills.anchor = anchors.children[1];
    skills.anchor.onclick = e => onClickAnchor(e, "skills");
    skills.div = document.getElementById("skills")
    skills.div.onanimationend = () => onEndAnimHandler(skills)
    
    projects.anchor = anchors.children[2];
    projects.anchor.onclick = e => onClickAnchor(e, "projects");
    projects.div = document.getElementById("projects")
    projects.div.onanimationend = () => onEndAnimHandler(projects)
    
    contact.anchor = anchors.children[3];
    contact.anchor.onclick = e => onClickAnchor(e, "contact");
    contact.div = document.getElementById("contact")
    contact.div.onanimationend = () => onEndAnimHandler(contact)

    about.div.className = "main";
    skills.div.className = "hide";
    projects.div.className = "hide"
    contact.div.className = "hide"
    
    about.anchor.className = "header-anchor-selected"
    skills.anchor.className = ""
    projects.anchor.className = ""
    contact.anchor.className = ""
    lastTag = "about"
})

const onEndAnimHandler = obj => {
    if(obj.div.className == "main main-anim-out-left" || obj.div.className == "main main-anim-out-right") {
        obj.div.className = "hide"
        onAnimation = false
    }
    
}

const onSetOut = (tag) => {
    switch(lastTag) {
        case "about":
            about.div.className = "main main-anim-out-left";
            about.anchor.className = ""
            break;
        case "skills": 
            if(tag === "about")
                skills.div.className = "main main-anim-out-right";
            else 
                skills.div.className = "main main-anim-out-left";
            skills.anchor.className = ""
            break
        case "projects":
            if(tag == "contact")
                projects.div.className = "main main-anim-out-left";
            else
                projects.div.className = "main main-anim-out-right";
            projects.anchor.className = ""
            break
        case "contact":
            contact.div.className = "main main-anim-out-right";
            contact.anchor.className = ""
        break
    }
}

const onClickAnchor = (e, tag) => {
    e.preventDefault();
    if(onAnimation || tag == lastTag) return;
    onAnimation =  true;
    switch(tag) {
        case "about":
            about.div.className = "main main-anim-in-left";
            about.anchor.className = "header-anchor-selected"
            onSetOut(tag);
            break;
        case "skills":
            if(lastTag == "about") 
                skills.div.className = "main main-anim-in-right";
            else
                skills.div.className = "main main-anim-in-left";
            skills.anchor.className = "header-anchor-selected"
            onSetOut(tag);
            break;
        case "projects":
            if(lastTag == "contact")
                projects.div.className = "main main-anim-in-left"
            else
                projects.div.className = "main main-anim-in-right"
            projects.anchor.className = "header-anchor-selected"
            onSetOut(tag);
            break;
        case "contact":
            contact.div.className = "main main-anim-in-right"
            contact.anchor.className = "header-anchor-selected"
            onSetOut(tag);
            break;
    }
    lastTag = tag;
}
