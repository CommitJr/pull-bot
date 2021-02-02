const idMembers = [1050923032, 165429746, 787781109, 641346719, 1074158722, 1434536913];
function isMember(idMember, idConsumer){
    return idConsumer == idMember;
}


module.exports = { idMembers, isMember };