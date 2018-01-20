let n
Initialize()

let timer=setInterval(()=>{
	makeLeave(getImage(n))
		.one('transitionend',(e)=>{
			makeEnter($(e.currentTarget))
		})
	makeCurrent(getImage(n+1))
	n+=1
},2000)

//消除页面被隐藏时浏览器产生的bug，visibilitychange事件
document.addEventListener('visibilitychange',function(e){
	if(document.hidden){
		window.clearInterval(timer)
	}else{
		timer=setInterval(()=>{
			makeLeave(getImage(n))
				.one('transitionend',(e)=>{
					makeEnter($(e.currentTarget))
				})
			makeCurrent(getImage(n+1))
			n+=1
		},2000)
	}

})






function getImage(n){
	return $(`.images>img:nth-child(${x(n)})`)
}

function x(n){
		if(n>5){
		n=n%5
		if(n===0){
			n=5
		}
	}
	return n
}
 
function Initialize(){
	n=1
	$(`.images>img:nth-child(${n})`).addClass('current')
		.siblings().addClass('enter')
}

function makeCurrent($node){
		$node.removeClass('enter leave').addClass('current')
}

function makeLeave($node){
		$node.removeClass('enter current').addClass('leave')
		return $node
}

function makeEnter($node){
		$node.removeClass('leave current').addClass('enter')
		return $node
}