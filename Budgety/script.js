// budgetController

const budgetController = (function () {

    //some code

    const Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    const Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    }

    Expense.prototype.calcPercentage = function (totalIncome) {
        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1;
        }
    };

    Expense.prototype.getPercentage = function () {
        return this.percentage
    }

    const calculateTotal = function (type) {
        let sum = 0;
        data.allItems[type].forEach(function (curr) {
            sum += curr.value;
        });
        data.totals[type] = sum;
    }

    const data = {
        allItems: {
            inc: [],
            exp: []
        },
        totals: {
            inc: 0,
            exp: 0
        },
        budget: 0,
        percentage: 0
    };

    return {
        addItem: function (type, des, val) {
            let id, newItem;

            // Creating id
            if (data.allItems[type].length > 0) {
                id = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                id = 0;
            }

            // Creating newItem based on inc or exp
            if (type === 'inc') {
                newItem = new Income(id, des, val);
            } else if (type === 'exp') {
                newItem = new Expense(id, des, val);
            }

            // push the newItem to allItems
            data.allItems[type].push(newItem);

            // return the newItem so we can acssess it out of the scope
            return newItem;
        },
        calculateBudget: function () {
            // calculate total income and expenses
            calculateTotal('inc');
            calculateTotal('exp');

            // calculate budget= income - expenses
            data.budget = data.totals.inc - data.totals.exp;

            // calculate percentage of income that we spent
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }
        },
        calculatePercentage: function() {
            data.allItems.exp.forEach(function(curr) {
                curr.calcPercentage(data.totals.inc);
            })},

        getPercentages: function() {
            const allPerc = data.allItems.exp.map(function(curr) {
                return curr.getPercentage();
            })
            return allPerc
        }
        ,

        getBudget: function () {
            return {
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                budget: data.budget,
                percentage: data.percentage
            }
        },
        delteItem: function (type, id) {
            const ids = data.allItems[type].map(function (current) {
                return current.id
            });

            const index = ids.indexOf(id);

            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            }
        },
        testing: function () {
            console.log(data);
        }
    };

})();


// uiController

const uiController = (function () {
    // some code here

    const domStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--price',
        expensesLabel: '.budget__expenses--price',
        budgetPercentageLabel: '.budget__expenses--percentage',
        container: '.container',
        percentageLabel: '.expenses__percentage',
        timeLabel: '.budget__time'

    };

    const formatNumber =  function(num, type) {
        let numSplit, int, dec;
        
        num = Math.abs(num);
        num = num.toFixed(2);

        numSplit = num.split('.');

        int = numSplit[0];
        dec = numSplit[1];

        if(int.length > 3) {
            int = int.substr(0, 1) + ',' + int.substr(1, 3); // input 2000 - expected output 2,000.00
        }

        return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;
    };

    let nodeListForEach = function (list, callBack) {
        for (let i = 0; i < list.length; i++) {
            callBack(list[i], i);
        }
    };

    return {
        getInput: function () {
            return {
                type: document.querySelector(domStrings.inputType).value, // inc (+) or exp (-)
                description: document.querySelector(domStrings.inputDescription).value,
                value: parseFloat(document.querySelector(domStrings.inputValue).value) // to make it float
            };
        },
        addListItem: function (obj, type) {
            let html, newHtml, element;
            // Creating html placeholder
            if (type === 'inc') {
                element = domStrings.incomeContainer;
                html = '<div class="income__item" id="inc-%id%"><div class="income__description">%description%</div><div class="income__value">%value%</div><button class="income__btn"><ion-icon name="close" class="btn__close--income"></ion-icon></button></div>'
            } else if (type === 'exp') {
                element = domStrings.expensesContainer;
                html = '<div class="expenses__item" id="exp-%id%"><div class="expenses__description">%description%</div><div class="expenses__value">%value%</div><div class="expenses__percentage">21%</div><button class="expenses__btn"><ion-icon name="close" class="btn__close--expenses"></ion-icon></button></div>'
            }

            // replacing html placeholder with actual code
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

            // insert html into dom
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        // clearing the fields after adding an income or expense
        clearFields: function () {
            const fields = document.querySelectorAll(domStrings.inputDescription + ', ' + domStrings.inputValue);

            const fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function (current, index, array) {
                current.value = "";
            });
            // to make the focus back to the first field
            fieldsArr[0].focus();
        },
        displayBudget: function (obj) {
            let type;
            obj.budget > 0 ? type === 'inc': type ==='exp'; 
            document.querySelector(domStrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(domStrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(domStrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');
            if (obj.percentage > 0) {
                document.querySelector(domStrings.budgetPercentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(domStrings.budgetPercentageLabel).textContent = '---'
            }
        },
        deleteListItem: function (selectorId) {
            const el = document.getElementById(selectorId);

            el.parentNode.removeChild(el);
        },
        displayPercentages: function (percentages) {
            const fileds = document.querySelectorAll(domStrings.percentageLabel);
            nodeListForEach(fileds, function (current, index) {
                if (percentages[index] > 0) {
                    current.textContent = percentages[index] + '%'
                } else {
                    current.textContent = '---'
                }
            })
        },
        deleteListItem: function (selectorId) {
            const el = document.getElementById(selectorId);

            el.parentNode.removeChild(el);
        },
        displayDate: function() {
            const now = new Date();

            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

            const month = now.getMonth();

            const year = now.getFullYear();

            document.querySelector(domStrings.timeLabel).textContent = 'Available budget in ' + months[month] + ' ' + year
        },
        changedType: function() {
            const fields = document.querySelectorAll(
                                    domStrings.inputType + ',' + 
                                    domStrings.inputDescription + ',' + 
                                    domStrings.inputValue
                                    );

            nodeListForEach(fields, function(curr) {
                curr.classList.toggle('pink__focus');
            })

            document.querySelector(domStrings.inputBtn).classList.toggle('btn__pink');
        },
        getDomStrings: function () {
            return domStrings;
        }
    };


})();

// global app controller



const controller = (function (budgetCtrl, uiCtrl) {
    // some code

    const dom = uiCtrl.getDomStrings();

    const setupEventListener = function () {

        document.querySelector(dom.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keydown', function (event) {
            if (event.keycode === 13 || event.which === 13) {
                ctrlAddItem();
            };
        });

        document.querySelector(dom.container).addEventListener('click', ctrlDelete);

        document.querySelector(dom.inputType).addEventListener('change', uiCtrl.changedType);

    };

    const updatePercentages = function () {
        // 1- calculate percentages
        budgetCtrl.calculatePercentage();

        // 2- read percentages from the budget controller
        const percentages = budgetCtrl.getPercentages();

        // 3- update the percentages in the ui
        uiCtrl.displayPercentages(percentages);
    }  

    const updateBudget = function () {
        // 1- calculate the budget
        budgetCtrl.calculateBudget();

        // 2- return the budget
        const budget = budgetCtrl.getBudget();

        // 3- display budget on the UI
        uiCtrl.displayBudget(budget);

    }

    // steps to make the budgety app
    const ctrlAddItem = function () {

        // 1- get the field input data
        const input = uiCtrl.getInput();
        // Checking the the input fields are not empty
        if (input.description !== "" && !isNaN(input.value) && input.value !== 0) {
            // 2- add the item to the budget controller
            const newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // 3- add the item to the UI
            uiCtrl.addListItem(newItem, input.type);

            // 4- Clearing the fields
            uiCtrl.clearFields();

            // 5- Calculate and Update the budget
            updateBudget();

            // 6- update the percentages 
            updatePercentages();
        }
    }

    const ctrlDelete = function (event) {
        let splitId, type, id;
        const itemId = event.target.parentNode.parentNode.id;

        if (itemId) {
            splitId = itemId.split('-');
            type = splitId[0];
            id = parseInt(splitId[1]);

            // 1- deleting the item from the data structure
            budgetCtrl.delteItem(type, id);

            // 2- deleting the item from the Ui
            uiCtrl.deleteListItem(itemId);

            // 3- update the new budget
            updateBudget();

            // 4- update the percentages 
            updatePercentages();
        }
    }

    return {
        init: function () {
            console.log('the application starts!');
            uiCtrl.displayBudget({
                totalInc: 0,
                totalExp: 0,
                budget: 0,
                percentage: -1
            });
            uiCtrl.displayDate();
            setupEventListener();
        }
    };
})(budgetController, uiController);

controller.init();