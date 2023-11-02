<script>
	import Navigation from '../components/Navigation/Navigation.svelte';
	const navList = [
		{ Href: '/', Name: 'Home' },
		{ Href: '/comparetext', Name: 'Compare Texts' },
		{ Href: '/generateguid', Name: 'Guid Generator' },
		{ Href: '/generaterandomnumber', Name: 'Random Number Generator' },
		{ Href: '/generaterandomstring', Name: 'Random String Generator' },
		{ Href: '/textworks', Name: 'Text Operations' }
	];
</script>
 
<Navigation {navList} />
