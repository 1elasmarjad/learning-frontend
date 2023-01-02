let allButtons = document.querySelectorAll('button');

let ratingValue = null;

for (i of allButtons) {
    i.addEventListener('click', function () {

        if (this.className === "submit") {

            if (ratingValue == null) {
                console.log("Cannot submit until rating is valid");
            } else {

                let rateContent = document.getElementsByClassName('rate-content')[0];
                rateContent.style.display = 'none';

                let submissionContent =  document.getElementsByClassName('submission-content')[0];
                submissionContent.style.display = 'inline-block';

                let selectionOutcome = document.getElementsByClassName("selection-outcome")[0];
                selectionOutcome.textContent = `You selected ${ratingValue} out of 5`

                // TODO -> next page
            }


        } else {
            let rating = this.textContent;

            let rateButtons = document.getElementsByClassName('rate');
            for (x of rateButtons) {
                x.style.backgroundColor = '';
                x.style.color = '';
            }

            this.style.backgroundColor = 'hsl(25, 97%, 53%)';
            this.style.color = 'white';

            ratingValue = rating;
        }

    });
}