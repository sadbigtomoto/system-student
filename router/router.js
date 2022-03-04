const express = require("express");
const router = express.Router();

const Admin = require("../muku/admin/admin");
const studentone = require("../muku/students/studentone");
const studentkc = require("../muku/students/studentkc");
const studentbj = require("../muku/students/studentbj");
const studentexam = require("../muku/students/studentexam");
const studentcj = require("../muku/students/studentcj");

module.exports = router;

router.get("/", function(req, res) {
    res.render("denglu.html");
});

router.get("/admin", function(req, res) {
    res.render("admin.html");
});

router.get("/student/zhuce", function(req, res) {
    res.render("zhuce.html");
});

router.get("/admin/adminindex", function(req, res) {
    res.render("adminindex.html");
});

router.get("/admin/adminindex/student", function(req, res) {
    res.render("studentdb.html");
});

router.get("/admin/adminindex/admin", function(req, res) {
    Admin.find(function(err, admins) {
        if (err) {
            return res.status(500).send("not FOund");
        }
        res.render("admindb.html", {
            admins: admins,
        });
    });
});
router.get("/admin/adminindex/admin/adminnew", function(req, res) {
    res.render("adminnew.html");
});
router.post("/admin/adminindex/admin/adminnew", function(req, res) {
    new Admin(req.body).save(function(err) {
        if (err) {
            return res.status(500).send("Not Found");
        }
        res.redirect("/admin/adminindex/admin");
    });
});
router.get("/admin/adminindex/admin/adminedit", function(req, res) {
    Admin.findById(req.query.id.replace(/"/g, ""), function(err, admin) {
        if (err) {
            return res.status(500).send("Not Found");
        }
        res.render("adminedit.html", {
            admin: admin,
        });
    });
});
router.post("/admin/adminindex/admin/adminedit", function(req, res) {
    var id = req.body.id.replace(/"/g, "");
    Admin.findByIdAndUpdate(id, req.body, function(err) {
        if (err) {
            return res.status(500).render("Not Found");
        }
        res.redirect("/admin/adminindex/admin");
    });
});
router.get("/admin/adminindex/admin/delete", function(req, res) {
    var id = req.query.id.replace(/"/g, "");
    Admin.findByIdAndRemove(id, function(err) {
        if (err) {
            return res.status(500).send("nod");
        }
        res.redirect("/admin/adminindex/admin");
    });
});

router.get("/student/studentindex", function(req, res) {
    res.render("studentindex.html");
});

router.get("/student/studentindex/studentself", function(req, res) {
    studentone.find(function(err, studentones) {
        if (err) {
            return res.status(500).send("not FOund");
        }
        res.render("studentself1.html", {
            studentones: studentones,
        });
    });
});
router.get("/student/studentindex/studentbj", function(req, res) {
    studentbj.find(function(err, studentbjs) {
        if (err) {
            return res.status(500).send("not FOund");
        }
        res.render("studentbj1.html", {
            studentbjs: studentbjs,
        });
    });
});
router.get("/student/studentindex/studentcj", function(req, res) {
    studentcj.find(function(err, studentcjs) {
        if (err) {
            return res.status(500).send("not FOund");
        }
        res.render("studentcj1.html", {
            studentcjs: studentcjs,
        });
    });
});
router.get("/student/studentindex/studentexam", function(req, res) {
    studentexam.find(function(err, studentexams) {
        if (err) {
            return res.status(500).send("not FOund");
        }
        res.render("studentexam1.html", {
            studentexams: studentexams,
        });
    });
});
router.get("/student/studentindex/studentkc", function(req, res) {
    studentkc.find(function(err, studentkcs) {
        if (err) {
            return res.status(500).send("not FOund");
        }
        res.render("studentkc1.html", {
            studentkcs: studentkcs,
        });
    });
});

router.get("/admin/adminindex/student/studentself", function(req, res) {
    studentone.find(function(err, studentones) {
        if (err) {
            return res.status(500).send("not FOund");
        }
        res.render("studentself.html", {
            studentones: studentones,
        });
    });
});
router.get("/admin/adminindex/student/studentselfnew", function(req, res) {
    res.render("studentselfnew.html");
});
router.post("/admin/adminindex/student/studentselfnew", function(req, res) {
    new studentone(req.body).save(function(err) {
        if (err) {
            console.log(err);
        }
        res.redirect("/admin/adminindex/student/studentself");
    });
});
router.get("/admin/adminindex/student/studentselfedit", function(req, res) {
    studentone.findById(
        req.query.id.replace(/"/g, ""),
        function(err, studentone1) {
            if (err) {
                return res.status(500).send("Not Found");
            }
            res.render("studentselfedit.html", {
                studentone1: studentone1,
            });
        }
    );
});
router.post("/admin/adminindex/student/studentselfedit", function(req, res) {
    var id = req.body.id.replace(/"/g, "");
    studentone.findByIdAndUpdate(id, req.body, function(err) {
        if (err) {
            return res.status(500).render("Not Found");
        }
        res.redirect("/admin/adminindex/student/studentself");
    });
});
router.get("/admin/adminindex/student/studentselfdelete", function(req, res) {
    var id = req.query.id.replace(/"/g, "");
    studentone.findByIdAndRemove(id, function(err) {
        if (err) {
            return res.status(500).send("nod");
        }
        res.redirect("/admin/adminindex/student/studentself");
    });
});

router.get("/admin/adminindex/student/studentbj", function(req, res) {
    studentbj.find(function(err, studentbjs) {
        if (err) {
            return res.status(500).send("not FOund");
        }
        res.render("studentbj.html", {
            studentbjs: studentbjs,
        });
    });
});
router.get("/admin/adminindex/student/studentbjnew", function(req, res) {
    res.render("studentbjnew.html");
});
router.post("/admin/adminindex/student/studentbjnew", function(req, res) {
    new studentbj(req.body).save(function(err) {
        if (err) {
            return res.status(500).send("Not Found");
        }
        res.redirect("/admin/adminindex/student/studentbj");
    });
});
router.get("/admin/adminindex/student/studentbjedit", function(req, res) {
    studentbj.findById(
        req.query.id.replace(/"/g, ""),
        function(err, studentbj1) {
            if (err) {
                return res.status(500).send("Not Found");
            }
            res.render("studentbjedit.html", {
                studentbj1: studentbj1,
            });
        }
    );
});
router.post("/admin/adminindex/student/studentbjedit", function(req, res) {
    var id = req.body.id.replace(/"/g, "");
    studentbj.findByIdAndUpdate(id, req.body, function(err) {
        if (err) {
            return res.status(500).render("Not Found");
        }
        res.redirect("/admin/adminindex/student/studentbj");
    });
});
router.get("/admin/adminindex/student/studentbjdelete", function(req, res) {
    var id = req.query.id.replace(/"/g, "");
    studentbj.findByIdAndRemove(id, function(err) {
        if (err) {
            return res.status(500).send("nod");
        }
        res.redirect("/admin/adminindex/student/studentbj");
    });
});

router.get("/admin/adminindex/student/studentcj", function(req, res) {
    studentcj.find(function(err, studentcjs) {
        if (err) {
            return res.status(500).send("not FOund");
        }
        res.render("studentcj.html", {
            studentcjs: studentcjs,
        });
    });
});
router.get("/admin/adminindex/student/studentcjnew", function(req, res) {
    res.render("studentcjnew.html");
});
router.post("/admin/adminindex/student/studentcjnew", function(req, res) {
    new studentcj(req.body).save(function(err) {
        if (err) {
            return res.status(500).send("Not Found");
        }
        res.redirect("/admin/adminindex/student/studentcj");
    });
});
router.get("/admin/adminindex/student/studentcjedit", function(req, res) {
    studentcj.findById(
        req.query.id.replace(/"/g, ""),
        function(err, studentcj1) {
            if (err) {
                return res.status(500).send("Not Found");
            }
            res.render("studentcjedit.html", {
                studentcj1: studentcj1,
            });
        }
    );
});
router.post("/admin/adminindex/student/studentcjedit", function(req, res) {
    var id = req.body.id.replace(/"/g, "");
    studentcj.findByIdAndUpdate(id, req.body, function(err) {
        if (err) {
            return res.status(500).render("Not Found");
        }
        res.redirect("/admin/adminindex/student/studentcj");
    });
});
router.get("/admin/adminindex/student/studentcjdelete", function(req, res) {
    var id = req.query.id.replace(/"/g, "");
    studentcj.findByIdAndRemove(id, function(err) {
        if (err) {
            return res.status(500).send("nod");
        }
        res.redirect("/admin/adminindex/student/studentcj");
    });
});

router.get("/admin/adminindex/student/studentexam", function(req, res) {
    studentexam.find(function(err, studentexams) {
        if (err) {
            return res.status(500).send("not FOund");
        }
        res.render("studentexam.html", {
            studentexams: studentexams,
        });
    });
});
router.get("/admin/adminindex/student/studentexamnew", function(req, res) {
    res.render("studentexamnew.html");
});
router.post("/admin/adminindex/student/studentexamnew", function(req, res) {
    new studentexam(req.body).save(function(err) {
        if (err) {
            return res.status(500).send("Not Found");
        }
        res.redirect("/admin/adminindex/student/studentexam");
    });
});
router.get("/admin/adminindex/student/studentexamedit", function(req, res) {
    studentexam.findById(
        req.query.id.replace(/"/g, ""),
        function(err, studentexam1) {
            if (err) {
                return res.status(500).send("Not Found");
            }
            res.render("studentexamedit.html", {
                studentexam1: studentexam1,
            });
        }
    );
});
router.post("/admin/adminindex/student/studentexamedit", function(req, res) {
    var id = req.body.id.replace(/"/g, "");
    studentexam.findByIdAndUpdate(id, req.body, function(err) {
        if (err) {
            return res.status(500).render("Not Found");
        }
        res.redirect("/admin/adminindex/student/studentexam");
    });
});
router.get("/admin/adminindex/student/studentexamdelete", function(req, res) {
    var id = req.query.id.replace(/"/g, "");
    studentexam.findByIdAndRemove(id, function(err) {
        if (err) {
            return res.status(500).send("nod");
        }
        res.redirect("/admin/adminindex/student/studentexam");
    });
});

router.get("/admin/adminindex/student/studentkc", function(req, res) {
    studentkc.find(function(err, studentkcs) {
        if (err) {
            return res.status(500).send("not FOund");
        }
        res.render("studentkc.html", {
            studentkcs: studentkcs,
        });
    });
});
router.get("/admin/adminindex/student/studentkcnew", function(req, res) {
    res.render("studentkcnew.html");
});
router.post("/admin/adminindex/student/studentkcnew", function(req, res) {
    new studentkc(req.body).save(function(err) {
        if (err) {
            return res.status(500).send("Not Found");
        }
        res.redirect("/admin/adminindex/student/studentkc");
    });
});
router.get("/admin/adminindex/student/studentkcedit", function(req, res) {
    studentkc.findById(
        req.query.id.replace(/"/g, ""),
        function(err, studentkc1) {
            if (err) {
                return res.status(500).send("Not Found");
            }
            res.render("studentkcedit.html", {
                studentkc1: studentkc1,
            });
        }
    );
});
router.post("/admin/adminindex/student/studentkcedit", function(req, res) {
    var id = req.body.id.replace(/"/g, "");
    studentkc.findByIdAndUpdate(id, req.body, function(err) {
        if (err) {
            return res.status(500).render("Not Found");
        }
        res.redirect("/admin/adminindex/student/studentkc");
    });
});
router.get("/admin/adminindex/student/studentkcdelete", function(req, res) {
    var id = req.query.id.replace(/"/g, "");
    studentkc.findByIdAndRemove(id, function(err) {
        if (err) {
            return res.status(500).send("nod");
        }
        res.redirect("/admin/adminindex/student/studentkc");
    });
});

router.get("/admin/adminindex/student/studentselffind", function(req, res) {
    res.render("studentselffind.html");
});
router.post("/admin/adminindex/student/studentselffind", function(req, res) {
    studentone.find({ name: req.body.name }, function(err, result) {
        if (err) {
            console.log(err);
        }
        res.render("studentselffindresult.html", {
            result: result,
        });
    });
});

router.get("/admin/adminindex/student/studentkcfind", function(req, res) {
    res.render("studentkcfind.html");
});
router.post("/admin/adminindex/student/studentkcfind", function(req, res) {
    studentkc.find({ major: req.body.major }, function(err, result) {
        if (err) {
            console.log(err);
        }
        res.render("studentkcfindresult.html", {
            result: result,
        });
    });
});

router.get("/admin/adminindex/student/studentexamfind", function(req, res) {
    res.render("studentexamfind.html");
});
router.post("/admin/adminindex/student/studentexamfind", function(req, res) {
    studentexam.find({ major: req.body.major }, function(err, result) {
        if (err) {
            console.log(err);
        }
        res.render("studentexamfindresult.html", {
            result: result,
        });
    });
});

router.get("/admin/adminindex/student/studentbjfind", function(req, res) {
    res.render("studentbjfind.html");
});
router.post("/admin/adminindex/student/studentbjfind", function(req, res) {
    studentbj.find({ major: req.body.major }, function(err, result) {
        if (err) {
            console.log(err);
        }
        res.render("studentbjfindresult.html", {
            result: result,
        });
    });
});

router.get("/admin/adminindex/student/studentcjfind", function(req, res) {
    res.render("studentcjfind.html");
});
router.post("/admin/adminindex/student/studentcjfind", function(req, res) {
    studentcj.find({ name: req.body.name }, function(err, result) {
        if (err) {
            console.log(err);
        }
        res.render("studentcjfindresult.html", {
            result: result,
        });
    });
});