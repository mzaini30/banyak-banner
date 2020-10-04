<br>
<div class="container">
	<h5 class="text-center">Banyak Banner {orientasi}</h5>
	<hr>
	<div class="row">
		<div class="col-sm-8">
			<div class="form-group">
				<p>Orientasi</p>
				<div class="form-check">
					<input type="radio" name="orientasi" class="form-check-input" id="portrait" checked group={orientasi} value='portrait'>
					<label class="form-check-label" for='portrait'>Portrait</label>
				</div>
				<div class="form-check">
					<input type="radio" name="orientasi" class="form-check-input" id="landscape" group={orientasi} value='landscape'>
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

-->`
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