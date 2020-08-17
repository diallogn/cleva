var members = require('../Members');

exports.get_members = (req, res, next) => {
    res.json(members);
}

exports.get_single_member = (req, res, next) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found) {
        res.send(members.filter(member => member.id === parseInt(req.params.id)));
    }else{
        res.status(400).json({msg: `No member with this id of ${req.params.id}` });
    }
}
exports.crete_new_member = (req, res, next) => {
    const newMember = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }
    if(!newMember.name || !newMember.email ) {
        return res.status(400).json({msg: "Please include a name and email"});
    }
    members.push(newMember);
    res.json(members);
}

exports.update_member = (req, res, next) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found) {
        const updMember = req.body;
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)){
                member.name = updMember.name ? updMember.name: member.name;
                member.email = updMember.email ? updMember.email: member.email;
                member.status = updMember.status ? updMember.status: member.status;

                res.json({msg: "Member Updated", member});
            }
        })
    }else{
        res.status(400).json({msg: `No member with this id of ${req.params.id}` });
    }
}

exports.delete_member = (req, res, next) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found) {
        res.json({
            msg: "Member deleted",
            members: members.filter(member => member.id !== parseInt(req.params.id))
        });
    }else{
        res.status(400).json({msg: `No member with this id of ${req.params.id}` });
    }
}