
console.log("hit1");
let text_box;

function func() {
    console.log("bahar aa gya");

    // Create a new button
    let btn = document.createElement('button');
    btn.innerText = "Generate Title";

    // Append the button to the target element


    let parentElement = document.getElementsByClassName('x1xqt7ti xsuwoey x63nzvj x1541jtf xq9mrsl x1h4wwuj x1fcty0u xeuugli')[0];
    
    btn.style.marginLeft = "290px"; 
    
    parentElement.appendChild(btn);


    // Get the current width and height of the button
    let currentWidth = parseInt(window.getComputedStyle(btn).width);
    let currentHeight = parseInt(window.getComputedStyle(btn).height);

    // Modify the button's width and height
    btn.style.width = (currentWidth + 15) + "px"; 
    btn.style.height = (currentHeight + 15) + "px"; 
    btn.style.fontWeight = "400";
    btn.style.borderWidth="1px";
    btn.style.borderColor="lightgrey";
    btn.style.boxShadow="none";
    btn.style.backgroundColor="white";
    btn.style.borderRadius = '5px';

    btn.addEventListener('click', async () => {
        try {
            console.log(text_box.value);

            const response = await fetch('http://localhost:3000/post', {
                method: 'POST',
                body: JSON.stringify({ prompt: text_box.value }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json(); 
            console.log(data);

            // Assuming 'data' contains a `data` field with the titles
            const titlesString = data.data;

            // Split the string by newlines to create an array of titles
            const optionsArray = titlesString
                .split('\n')                         
                .map(title => title.trim())          
                .filter(title => title);             

            // Remove the first and last element from the array
            optionsArray.shift();  
            optionsArray.pop();    

            console.log(optionsArray);

            // Display the list
            let listContainer = document.getElementById('generated-options');
            if (!listContainer) {
                listContainer = document.createElement('div'); 
                listContainer.id = 'generated-options';
                document.getElementsByClassName('x1iyjqo2 xs83m0k xdl72j9 x3igimt xedcshv x1t2pt76 x1l90r2v x1swvt13 x1pi30zi xexx8yu')[2].firstChild.appendChild(listContainer);
            }

            // Clear existing list
            listContainer.innerHTML = '';

            // Populate the list with options
            optionsArray.forEach((option) => {
                const listItem = document.createElement('div');
                listItem.textContent = option; 
                listItem.style.cursor = "pointer"; 
                listItem.style.margin = "5px 0"; 
                listItem.style.padding = "5px";
                listItem.style.border = "1px solid #ccc";
                listItem.style.borderRadius = "4px";

                // Add hover effect for better UX
                listItem.addEventListener('mouseover', () => {
                    listItem.style.backgroundColor = "#f0f0f0";
                });
                listItem.addEventListener('mouseout', () => {
                    listItem.style.backgroundColor = "transparent";
                });

                // Add click event to replace the text_box value with the selected option
                listItem.addEventListener('click', () => {
                    text_box.value = option; 
                });

                listContainer.appendChild(listItem);
            });

        } catch (error) {
            console.error('Error:', error);
        }
    });
}

// Interval to find the text box and set up the functionality
let interval = setInterval(() => {
    text_box = document.getElementsByClassName('xjbqb8w x972fbf xcfux6l x1qhh985 xm0m39n xdj266r x11i5rnm xat24cr x1mh8g0r x1t137rt xexx8yu x4uap5 x18d9i69 xkhd6sd xwd1esu x1gnnqk1 x1541jtf x1urst0s x1glnyev x1ad04t7 x1ix68h3 x19gujb8 xni1clt x1tutvks xfrpkgu xmi5d70 x1fvot60 xo1l8bm xxio538 x1rffpxw xh8yej3')[0];
    console.log(text_box);
    if (text_box) {
        clearInterval(interval);
        func(); 
    }
}, 3000);
