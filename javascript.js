
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
            e.name === 'menu' ? 
            (e.name = "close", list.classList.add('top-[80px]'), list.classList.add('opacity-100'))
             : (e.name = "menu", list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'))

             list.classList.toggle('hidden');
             list.classList.toggle('block')
        }