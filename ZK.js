// publish 多个 Subscriber
// pub-sub

// 发布者
let zk={};
// 订阅者
zk.peopleList=[];
// 作何反应？订阅关系
zk.listen=function(fn){
    this.peopleList.push(fn)
}
zk.trigger=function(){
    // ?消息发布之后，订阅者都做出反应
    for(var i=0,fn;fn=this.peopleList[i++];)
    fn.apply(this,arguments)
}

zk.listen(function(msg){
    console.log(`收到你${msg}的信息,坐飞机来`);
})
zk.listen(function(msg){
    console.log(`收到你${msg}的信息,来不了`);
})

zk.trigger('曾凯同志结婚了');
zk.trigger('曾凯生了大胖小子');