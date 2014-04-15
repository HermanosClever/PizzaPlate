<?php
$page = 'home';
$lang = 'es';
 ?>
<!DOCTYPE html>
<?php include 'incl/_cc.inc'; ?>
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		<title>&lt;PizzaPlate /&gt;</title>
		<?php include 'incl/_head.inc'; ?>
	</head>
	<body class="<?php echo $page; ?> ">
		<div class="page_container">

			<?php include 'incl/_header.inc'; ?>

			<!-- Main content -->
			<section id="main">
				<div class="wrapper">
					<p>(Main content)</p>
					<div></div>
				</div>
			</section>

			<?php include 'incl/_footer.inc'; ?>
			<img src="http://placehold.it/300x300"/>

			<ol>
				<li>Paco 1</li>
				<li>Paco 2</li>
				<li>Paco 3</li>

			</ol>

		</div>
		<?php include 'incl/_js.inc'; ?>
		<?php include 'incl/_tag.inc'; ?>

	</body>
</html>
