const rates = {
    pera: {unit: "%", rate:0.05},
    medicare: {unit: "%", rate:0.0145},
    meetings: {unit: "/mtg", rate:100},
    mileage: {unit: "/mile", rate: 0.70},
    phone: {unit: "/qtr", rate: 30},
    internet: {unit: "/qtr", rate: 30},
};
const salaries = {
    supervisor: {unit:"/hr", rate: 30},
    clerk: {unit:"/qtr", rate: 750},
    deputyclerk: {unit:"/qtr", rate: 150},
    treasurer: {unit:"/qtr", rate: 550},
    deputytreasurer: {unit:"/qtr", rate: 0},
};
const board = {
    "John Barlow": "Treasurer",
    "Daryl Felt": "Supervisor",
    "Ben Hain": "Supervisor",
    "John Johnson": "Supervisor",
    "Jerome Lawler": "Deputy Clerk",
    "Joe Mahoney": "Clerk",
    "Steve Pollack": "Supervisor",
    "Paul Uecker": "Supervisor",
    "Laura Zumbrunnen": "Deputy Treasurer",
};
export {rates, salaries, board};