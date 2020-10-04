<br>
<div class="container">
	<h5 class="text-center">Banyak Banner</h5>
	<hr>
	<div class="row">
		<div class="col-sm-8">
			<div class="form-group">
				<p>Orientasi</p>
				<div class="form-check">
					<input type="radio" name="orientasi" class="form-check-input" id="portrait" bind:group={orientasi} value='portrait'>
					<label class="form-check-label" for='portrait'>Portrait</label>
				</div>
				<div class="form-check">
					<input type="radio" name="orientasi" class="form-check-input" id="landscape" bind:group={orientasi} value='landscape'>
					<label class="form-check-label" for='landscape'>Landscape</label>
				</div>
			</div>
			<div class="form-group">
				<label for="kumpulan-link">Kumpulan link</label>
				<textarea bind:this={isian} class="form-control" bind:value={valueIsian} id="kumpulan-link" placeholder="https://situs.com/gambarnya.jpg
https://situs.com/target

https://situs.com/gambarnya.jpg
https://situs.com/target"></textarea>
			</div>
		</div>
		<div class="col-sm-4">
			<p>Kode hasilnya</p>
			<div class="form-group">
				<textarea class="form-control" rows='5' readonly bind:value={valueHasil}></textarea>
			</div>
			<p>Preview</p>
			<div class="hasil" bind:this={hasil}>{@html valueHasil}</div>
		</div>
	</div>
</div>

<script type="text/javascript">
	import {onMount} from 'svelte'
	let isian
	let valueIsian
	let hasil
	let valueHasil = ''
	let orientasi = 'portrait'
	let data = []
	onMount(() => {
		if (localStorage.banyakBanner) {
			valueIsian = localStorage.banyakBanner
		}
		const ubahUkuran = () => {
			isian.style.height = `${window.innerHeight - 250}px`
			hasil.style.height = `${window.innerHeight - 360}px`
		}
		ubahUkuran()
		window.addEventListener('resize', ubahUkuran)
	})
	$: if (valueIsian){
		valueHasil = `<!--
generator: mzaini30.js.org/banyak-banner

${valueIsian}

-->
<style>
	img {
		max-width: 100%;
	}
</style>
`
		data = valueIsian.split('\n')
		if (orientasi == 'portrait'){
			for (let n = 0; n < data.length; n += 3){
				valueHasil += `<center>
	<a href='${data[n + 1]}' target='_blank'>
		<img src='${data[n]}'>
	</a>
</center>`
			}
		} else if (orientasi == 'landscape'){
			valueHasil += `<table><tr>`
			for (let n = 0; n < data.length; n += 3){
				valueHasil += `<td>
	<a href='${data[n + 1]}' target='_blank'>
		<img src='${data[n]}'>
	</a>
</td>`
			}
			valueHasil += `</tr></table>`
		}
		localStorage.setItem('banyakBanner', valueIsian)
	}
</script>

<style type="text/css">
	.hasil {
		background: #e9ecef;
		width: 100%;
		overflow: auto;
	}
</style>