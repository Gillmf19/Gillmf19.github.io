document.addEventListener("DOMContentLoaded", function() {
    // Obtenemos todos los botones
    var buttons = document.querySelectorAll('.botones-grid button');

    // Definimos un objeto donde cada tema está asociado con una lista de páginas relacionadas
    var paginasRelacionadas = {
        'fibonacci': [
            'https://es.wikipedia.org/wiki/Sucesi%C3%B3n_de_Fibonacci',
            'https://www.scielo.org.mx/scielo.php?pid=S2448-56912010000100015&script=sci_arttext',
            'https://www.ecured.cu/N%C3%BAmeros_de_Fibonacci#:~:text=N%C3%BAmeros%20de%20Fibonacci%201%20Definici%C3%B3n%20Se%20llaman%20n%C3%BAmeros,5%20Aplicaciones%20...%206%20Nim%20de%20Fibonacci%20',
            'https://www.rapidtables.org/math/number/fibonacci.html',
            'https://www.cinconoticias.com/sucesion-de-fibonacci/',
            'https://www.youtube.com/watch?v=B6ztvqvZTsk&pp=ygURbnVtZXJvcyBmaWJvbmFjY2k%3D',
            'https://www.bing.com/ck/a?!&&p=58df1fdc5f9a0b55JmltdHM9MTcxMzIyNTYwMCZpZ3VpZD0wODNkOTdiMC02Yzc3LTYxNGMtMWUyZi04NDllNmRmMzYwNDcmaW5zaWQ9NTgyMg&ptn=3&ver=2&hsh=3&fclid=083d97b0-6c77-614c-1e2f-849e6df36047&u=a1L3ZpZGVvcy9yaXZlcnZpZXcvcmVsYXRlZHZpZGVvP3E9bnVtZXJvcytmaWJvbmFjY2kmbWlkPUJDMkFDQURCQUU5Q0RBOTZCOTA4QkMyQUNBREJBRTlDREE5NkI5MDgmRk9STT1WSVJF&ntb=1',
            'https://economipedia.com/definiciones/sucesion-de-fibonacci.html'
            // Agrega más URLs relacionadas con Fibonacci
        ],
        'hanoi': [
            'https://www.geogebra.org/m/NqyWJVra',
            'https://es.wikipedia.org/wiki/Torres_de_Han%C3%B3inoi/page1',
            'https://es.khanacademy.org/computing/computer-science/algorithms/towers-of-hanoi/a/towers-of-hanoi',
            'https://cienciaexplicada.com/torres-de-hanoi-juego-e-historia.html',
            'https://www.youtube.com/watch?v=MYFYLuudZlM',
            'https://www.youtube.com/watch?v=LM68IQvIo_E&pp=ygUPdG9ycmVzIGRlIGhhbm9p',
            'https://www.youtube.com/watch?v=CIAQb3xbmzg&pp=ygUPdG9ycmVzIGRlIGhhbm9p',
            'https://claridadmental.es/el-desafio-del-juego-de-las-torres-de-hanoi/',
            'https://www.bing.com/ck/a?!&&p=3d9ee7715b9ab649JmltdHM9MTcxMzIyNTYwMCZpZ3VpZD0wODNkOTdiMC02Yzc3LTYxNGMtMWUyZi04NDllNmRmMzYwNDcmaW5zaWQ9NTIxOA&ptn=3&ver=2&hsh=3&fclid=083d97b0-6c77-614c-1e2f-849e6df36047&psq=torres+de+hanoi+pdf&u=a1aHR0cHM6Ly9tYXRoYW1pZ29zLm9yZy93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wMS8xNy1fLVRvd2VyLW9mLUhhbm9pLV8tU3BhbmlzaC5wZGY&ntb=1',
            // Agrega más URLs relacionadas con Hanoi
        ],
        'factoriales': [
            'https://www.disfrutalasmatematicas.com/numeros/factorial.html',
            'https://es.wikipedia.org/wiki/Factorial',
            'https://www.polinomios.org/funcion-factorial-de-un-numero/',
            'https://matemathweb.com/algebra/factorial/',
            'https://factorial.mx/numero-funcion-factorial',
            'https://es.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/the-factorial-function',
            'https://www.studysmarter.es/resumenes/matematicas/estadistica-y-probabilidad/factorial/',
            'https://www.youtube.com/watch?v=f9c1k4jrT80&pp=ygULZmFjdG9yaWFsZXM%3D',
            'https://www.youtube.com/watch?v=BKHBESHjGEA&pp=ygULZmFjdG9yaWFsZXM%3D',
            'https://www.youtube.com/watch?v=7e0orrWrssA&pp=ygULZmFjdG9yaWFsZXM%3D'
        ],
        'operacionesconcolas': [
            'https://www.apinem.com/colas-en-programacion/',
            'https://www.oscarblancarteblog.com/2014/08/01/estructura-de-datos-queue-cola/',
            'https://www.ecured.cu/Cola_(Estructura_de_datos)',
            'https://es.wikipedia.org/wiki/Cola_(inform%C3%A1tica)',
            'https://uniwebsidad.com/libros/algoritmos-python/capitulo-17/colas',
            'https://recursospython.com/guias-y-manuales/colas-con-el-modulo-queue/',
            'https://www.youtube.com/watch?v=6jWTVvH4Sz0&pp=ygUVY29sYXMgZW4gcHJvZ3JhbWFjaW9u',
            'https://www.youtube.com/watch?v=gTt4rG2Cja4&pp=ygUVY29sYXMgZW4gcHJvZ3JhbWFjaW9u',
            'https://www.youtube.com/watch?v=R-tTSGPvwIU&pp=ygUVY29sYXMgZW4gcHJvZ3JhbWFjaW9u',
            'https://www.youtube.com/watch?v=wuGYzEcgTTw&pp=ygUVY29sYXMgZW4gcHJvZ3JhbWFjaW9u',
            'https://www.youtube.com/watch?v=HCheqcvGMvc&pp=ygUVY29sYXMgZW4gcHJvZ3JhbWFjaW9u'
        ],
        'colaenlazada': [
            'https://www.bing.com/ck/a?!&&p=8afef47cc42d96b0JmltdHM9MTcxMzIyNTYwMCZpZ3VpZD0wODNkOTdiMC02Yzc3LTYxNGMtMWUyZi04NDllNmRmMzYwNDcmaW5zaWQ9NTI4MQ&ptn=3&ver=2&hsh=3&fclid=083d97b0-6c77-614c-1e2f-849e6df36047&psq=cola+enlazada&u=a1aHR0cDovL3d3dy5pdC51YzNtLmVzL2phdmEvMjAxMi0xMy91bml0cy9waWxhcy1jb2xhcy9ndWlkZXMvaW5kZXhfZXMuaHRtbA&ntb=1',
            'https://www.youtube.com/watch?v=6iGcnlwNwKE&pp=ygUNY29sYSBlbmxhemFkYQ%3D%3D',
            'https://www.youtube.com/watch?v=0NzAFk1CwaQ&pp=ygUNY29sYSBlbmxhemFkYQ%3D%3D',
            'https://www.youtube.com/watch?v=8xEoDH2B-mk&pp=ygUNY29sYSBlbmxhemFkYQ%3D%3D',
        ],
        'colasdobles': [
            'https://www.youtube.com/watch?v=ulKSfRMhM-E&pp=ygUKY29sYSBkb2JsZQ%3D%3D',
            'https://www.youtube.com/watch?v=T2Kid4_cy80&pp=ygUKY29sYSBkb2JsZQ%3D%3D',
            'https://www.youtube.com/watch?v=6jWTVvH4Sz0&pp=ygUWY29sYSBkb2JsZSBpbmZvcm1hdGljYQ%3D%3D',
            'https://www.youtube.com/watch?v=l8JV6xxPrfE&pp=ygUWY29sYSBkb2JsZSBpbmZvcm1hdGljYQ%3D%3D',
            'https://www.youtube.com/watch?v=cdhBjiKdtgQ&pp=ygUWY29sYSBkb2JsZSBpbmZvcm1hdGljYQ%3D%3D',
            'https://runestone.academy/ns/books/published/pythoned/BasicDS/QueEsUnaColaDoble.html',
            'https://cursos.clavijero.edu.mx/cursos/144_ed/modulo2/contenidos/tema2.6.html',
            'https://industriapedia.com/que-es-una-cola-doble/',
            'https://runestone.academy/ns/books/published/pythoned/BasicDS/ImplementacionDeUnaColaDobleEnPython.html',
            'https://es.wikipedia.org/wiki/Cola_doblemente_terminada'
        ],
        'colacircular': [
            'https://cursos.clavijero.edu.mx/cursos/144_ed/modulo2/contenidos/tema2.5.html',
            'https://es.wikipedia.org/wiki/Cola_circular',
            'https://www.techiedelight.com/es/circular-queue-implementation-c/',
            'https://barcelonageeks.com/cola-circular-conjunto-1-introduccion-e-implementacion-de-arrays/',
            'https://www.wikiwand.com/es/Cola_circular',
            'https://tareasuniversitarias.com/cola-circular.html',
            'https://www.youtube.com/watch?v=BNSjGD8eJbg&pp=ygUNY29sYSBjaXJjdWxhcg%3D%3D',
            'https://www.youtube.com/watch?v=HmAYtKaVYCM&pp=ygUNY29sYSBjaXJjdWxhcg%3D%3D',
            'https://www.youtube.com/watch?v=Bhr-ME11yDY&pp=ygUNY29sYSBjaXJjdWxhcg%3D%3D',
            'https://www.youtube.com/watch?v=6UAiuMLRKnY&pp=ygUNY29sYSBjaXJjdWxhcg%3D%3D',
            'https://www.youtube.com/watch?v=D3dKowMypzk&pp=ygUNY29sYSBjaXJjdWxhcg%3D%3D'
        ],
        'operacionesconlistas': [
            'https://www.youtube.com/watch?v=4h3F6g2J9gc&pp=ygUWb3BlcmFjaW9uZXMgY29uIGxpc3Rhcw%3D%3D',
            'https://www.youtube.com/watch?v=N2i9uBRyJgk&pp=ygUWb3BlcmFjaW9uZXMgY29uIGxpc3Rhcw%3D%3D',
            'https://www.youtube.com/watch?v=-h4ZvNcMxZE&pp=ygUWb3BlcmFjaW9uZXMgY29uIGxpc3Rhcw%3D%3D',
            'https://www.youtube.com/watch?v=q0ZjkrdMXPY&pp=ygUWb3BlcmFjaW9uZXMgY29uIGxpc3Rhcw%3D%3D',
            'https://www.youtube.com/watch?v=wUPaGWjim08&pp=ygUWb3BlcmFjaW9uZXMgY29uIGxpc3Rhcw%3D%3D',
            'https://www.bing.com/ck/a?!&&p=e260cec37c6ad929JmltdHM9MTcxMzIyNTYwMCZpZ3VpZD0wODNkOTdiMC02Yzc3LTYxNGMtMWUyZi04NDllNmRmMzYwNDcmaW5zaWQ9NTIwOA&ptn=3&ver=2&hsh=3&fclid=083d97b0-6c77-614c-1e2f-849e6df36047&psq=operaciones+con+listas&u=a1aHR0cHM6Ly9tZWRpdW0uY29tL0BoZ29kaW5lejg5L29wZXJhY2lvbmVzLXNvYnJlLWxpc3Rhcy1lbi1weXRob24tYzE5ODUzYTlkMDdi&ntb=1',
            'https://www.bing.com/ck/a?!&&p=4306864da92f926cJmltdHM9MTcxMzIyNTYwMCZpZ3VpZD0wODNkOTdiMC02Yzc3LTYxNGMtMWUyZi04NDllNmRmMzYwNDcmaW5zaWQ9NTI1NA&ptn=3&ver=2&hsh=3&fclid=083d97b0-6c77-614c-1e2f-849e6df36047&psq=operaciones+con+listas&u=a1aHR0cHM6Ly9pbnRlcmFjdGl2ZWNoYW9zLmNvbS9lcy9tYW51YWwvdHV0b3JpYWwtZGUtcHl0aG9uL29wZXJhY2lvbmVzLWNvbi1saXN0YXM&ntb=1',
            'https://www.wolfram.com/language/elementary-introduction/2nd-ed/05-operations-on-lists.html.es',
            'https://www.bing.com/ck/a?!&&p=5421e73e7cd5ddc8JmltdHM9MTcxMzIyNTYwMCZpZ3VpZD0wODNkOTdiMC02Yzc3LTYxNGMtMWUyZi04NDllNmRmMzYwNDcmaW5zaWQ9NTIyMg&ptn=3&ver=2&hsh=3&fclid=083d97b0-6c77-614c-1e2f-849e6df36047&psq=operaciones+con+listas&u=a1aHR0cHM6Ly9jdXJzb3MuY2xhdmlqZXJvLmVkdS5teC9jdXJzb3MvMTQ0X2VkL21vZHVsbzMvY29udGVuaWRvcy90ZW1hMy40Lmh0bWw&ntb=1',
        ],
        'listasenlazadas': [
            'https://es.wikipedia.org/wiki/Lista_enlazada',
            'https://www.it.uc3m.es/java/2012-13/units/pilas-colas/guides/4/guide_es_solution.html',
            'https://www.bing.com/ck/a?!&&p=2c5102a245dbc390JmltdHM9MTcxMzIyNTYwMCZpZ3VpZD0wODNkOTdiMC02Yzc3LTYxNGMtMWUyZi04NDllNmRmMzYwNDcmaW5zaWQ9NTIxOQ&ptn=3&ver=2&hsh=3&fclid=083d97b0-6c77-614c-1e2f-849e6df36047&psq=cola+enlazada&u=a1aHR0cHM6Ly9lcy5zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvOTUzNDEvcGlsYS15LWNvbGEtZW4tdW5hLWxpc3RhLWVubGF6YWRh&ntb=1',
            'https://www.bing.com/ck/a?!&&p=bff3f10ac379c845JmltdHM9MTcxMzIyNTYwMCZpZ3VpZD0wODNkOTdiMC02Yzc3LTYxNGMtMWUyZi04NDllNmRmMzYwNDcmaW5zaWQ9NTMzOA&ptn=3&ver=2&hsh=3&fclid=083d97b0-6c77-614c-1e2f-849e6df36047&psq=cola+enlazada&u=a1aHR0cHM6Ly9jb2RlZ3ltLmNjL2VzL2dyb3Vwcy9wb3N0cy9lcy4yMDQuZXN0cnVjdHVyYS1kZS1kYXRvcy1kZS1saXN0YS1lbmxhemFkYS1lbi1qYXZh&ntb=1',
            'https://www.bing.com/ck/a?!&&p=9e488c00db814bc6JmltdHM9MTcxMzIyNTYwMCZpZ3VpZD0wODNkOTdiMC02Yzc3LTYxNGMtMWUyZi04NDllNmRmMzYwNDcmaW5zaWQ9NTM0MQ&ptn=3&ver=2&hsh=3&fclid=083d97b0-6c77-614c-1e2f-849e6df36047&psq=cola+enlazada&u=a1aHR0cHM6Ly93d3cudGVjaGllZGVsaWdodC5jb20vZXMvbGlua2VkLWxpc3QtaW1wbGVtZW50YXRpb24tamF2YS8&ntb=1',
            'https://www.youtube.com/watch?v=qk67wS7WYxo&pp=ygUQbGlzdGFzIGVubGF6YWRhcw%3D%3D',
            'https://www.youtube.com/watch?v=15urP2LmfqY&pp=ygUQbGlzdGFzIGVubGF6YWRhcw%3D%3D',
            'https://www.youtube.com/watch?v=MThabgtlmDM&pp=ygUQbGlzdGFzIGVubGF6YWRhcw%3D%3D',
            'https://www.youtube.com/watch?v=FIm34V6A4C4&pp=ygUQbGlzdGFzIGVubGF6YWRhcw%3D%3D',
            'https://www.youtube.com/watch?v=0NzAFk1CwaQ&pp=ygUQbGlzdGFzIGVubGF6YWRhcw%3D%3D'
        ],
        'listascirculares': [
            'https://tutoriales.edu.lat/pub/data-structures-algorithms/circular-linked-list-algorithm/estructura-de-datos-lista-enlazada-circular',
            'https://algoritmosfiisunas.blogspot.com/2017/02/listas-circulares.html',
            'https://es.ccm.net/ordenadores/programacion/1664-las-listas-circulares/',
            'https://blogs.ead.unlp.edu.ar/programacion2/2012/08/23/listas-circulares/',
            'http://cidecame.uaeh.edu.mx/lcc/mapa/PROYECTO/libro9/listas_circulares.html',
            'https://programacionfacilestructuradedatos.blogspot.com/2017/05/listas-circulares.html',
            'https://www.youtube.com/watch?v=L45lhivWQ9I&pp=ygUObGlzdGEgY2lyY3VsYXI%3D',
            'https://www.youtube.com/watch?v=m2ellSLIc5E&pp=ygUObGlzdGEgY2lyY3VsYXI%3D',
            'https://www.youtube.com/watch?v=ElDEVDitQ7M&pp=ygUObGlzdGEgY2lyY3VsYXI%3D',
            'https://www.youtube.com/watch?v=nZgnxe562RQ&pp=ygUObGlzdGEgY2lyY3VsYXI%3D'
        ]
        // Agrega más temas y sus URLs relacionadas según sea necesario
    };

    // Función para obtener una URL aleatoria de la lista de páginas relacionadas de un tema específico
    function obtenerPaginaRelacionadaAleatoria(tema) {
        var paginas = paginasRelacionadas[tema];
        var indiceAleatorio = Math.floor(Math.random() * paginas.length);
        return paginas[indiceAleatorio];
    }

    // Agregamos un evento de clic a cada botón
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var tema = this.textContent.toLowerCase().replace(/\s+/g, '').trim();
        
            // Verificar si el tema existe en el objeto de páginas relacionadas
            if (tema in paginasRelacionadas) {
                var pagina = obtenerPaginaRelacionadaAleatoria(tema);
                window.open(pagina, '_blank');
            } else {
                console.error("No se encontró el tema relacionado:", tema);
            }
        });
    });})
