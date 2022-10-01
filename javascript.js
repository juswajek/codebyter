
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        clifford: '#da373d',
                    }
                }
            }
        }

        function Menu(e) {
            let list = document.querySelector('ul');
            let mbtn = document.querySelector('#menu')

            mbtn.classList.toggle('fa-xmark');
            mbtn.classList.toggle('fa-bars');

             list.classList.toggle('hidden');
             list.classList.toggle('block')
        }