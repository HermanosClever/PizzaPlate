<?php
$page = 'home';
 ?>
<!DOCTYPE html>
<?php include 'incl/_cc.php'; ?>
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		<title>&lt;PizzaPlate /&gt;</title>
		<?php include 'incl/_head.php'; ?>
	</head>
	<body class="<?php echo $page; ?> ">
		<div class="page_container">

			<?php include 'incl/_header.php'; ?>

			<!-- Main content -->
			<section id="main">
				<div class="wrapper">
					<p>(Main content)</p>

					<?php include 'incl/_form.php'; ?>

				</div>
			</section>

			<?php include 'incl/_footer.php'; ?>

		</div>
		<?php include 'incl/_js.php'; ?>
		<?php include 'incl/_tag.php'; ?>
	</body>
</html>
