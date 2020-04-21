btnComp = document.getElementById('company');
main = document.getElementById('main');
btnMain = document.getElementById('btnMain');
btnCatalog = document.getElementById('btnCatalog');
btnCart = document.getElementById('cartBtn');
btnSign = document.getElementById('signBtn');
closeBtn = document.getElementById('closeBtn');

btnComp.addEventListener('click', function(){
	main.classList.add('hide');
	document.getElementById('comp').classList.remove('hide');
	document.getElementById('catalog').classList.add('hide');
    document.getElementById('container_cart').style.display = 'none';
    document.getElementById('crumCatalog').style.display = 'none';
    document.getElementById('crumMain').style.display = 'none';
    document.getElementById('crumCart').style.display = 'none';
    document.getElementById('crumComp').style.display = 'block';
});

btnMain.addEventListener('click', function(){
	main.classList.remove('hide');
	document.getElementById('comp').classList.add('hide');
	document.getElementById('catalog').classList.add('hide');
    document.getElementById('container_cart').style.display = 'none';
    document.getElementById('crumMain').style.display = 'block';
    document.getElementById('crumCart').style.display = 'none';
    document.getElementById('crumComp').style.display = 'none';
});	

btnCatalog.addEventListener('click', function(){
	main.classList.add('hide');
	document.getElementById('catalog').classList.remove('hide');
	document.getElementById('comp').classList.add('hide');
    document.getElementById('container_cart').style.display = 'none';
    document.getElementById('crumCatalog').style.display = 'block';
    document.getElementById('crumMain').style.display = 'none';
    document.getElementById('crumCart').style.display = 'none';
    document.getElementById('crumComp').style.display = 'none';
});

btnCart.addEventListener('click', function(){
	main.classList.add('hide');
	document.getElementById('catalog').classList.add('hide');
	document.getElementById('comp').classList.add('hide');
    document.getElementById('container_cart').classList.remove('hide');
    document.getElementById('crumCatalog').style.display = 'none';
    document.getElementById('crumCart').style.display = 'block';
    document.getElementById('crumMain').style.display = 'none';
});

btnSign.addEventListener('click', function(){
	document.getElementById('sign').classList.remove('hide');
});

closeBtn.addEventListener('click', function(){
	document.getElementById('sign').classList.add('hide');
});
