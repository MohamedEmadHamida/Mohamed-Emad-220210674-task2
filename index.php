<!DOCTYPE html>
<html>

<head>
    <title>student Grade System</title>
    <meta name="viewport"
        content="width=device-width, initial-scale=1" />

    <!-- css files -->
    <link rel="stylesheet"
        href="css/animate.css">
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel="stylesheet"
        href="css/style.css">

</head>

<body>
    <header>
        <h1>System</h1>
    </header>

    <nav>
        <ul>
            <li><a href="#"><i class="fas fa-home"></i> Home</a></li>
            <li><a href="#"><i class="fas fa-info-circle"></i>
                    About</a></li>
            <li><a href="#"><i class="fas fa-tools"></i> System</a></li>
            <li><a href="#"><i class="fas fa-envelope"></i> Contact</a></li>
        </ul>
    </nav>
    <main>
        <div class="container">
            <form id="myForm"
                action
                target="self"
                method="get">

                <div class="card_header">
                    <div>NO.</div>
                    <div>Name</div>
                    <div>ID</div>
                    <div>Grade</div>
                    <div>Exam Mark</div>
                    <div>GPA</div>
                    <div>Mark</div>

                </div>

                <div class="cards">
                    <?php include 'php/data.php'; ?>
                </div>
                <div id="btn-area">
                    <input class="glass-button"
                        type="submit"
                        value="Submit"
                        onclick="submitForm()">
                    <input class="btn glass-button"
                        type="button"
                        value="bouns 5"
                        onclick="AddBounds()">
                </div>
            </form>
        </div>
    </main>
    <section class="wow slideInLeft"
        data-wow-duration="2s"
        data-wow-delay="5s">
    </section>

    <footer>
        <p></p>
    </footer>

    <!--              JS script                          -->
    <script src="js/main.js"></script>
    <script src="js/wow.min.js"></script>
    <script>
    new WOW().init();
    </script>
    <script src="js/wow.js"></script>

</body>

</html>