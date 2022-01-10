export const DomIndex = (req, res) => {
    res.render("pages/dom", {
        pageTitle: "Dom",
        styleCSS: "dom.css",
        mainJS: "dom.js",
    })
};

export const ModalIndex = (req, res) => {
    res.render("pages/modal", {
        pageTitle: "Modal",
        styleCSS: "modal.css",
        mainJS: "modal.js"
    })
};





