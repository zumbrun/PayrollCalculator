const rates = {
    PERA: {unit: "%", rate:0.05},
    medicare: {unit: "%", rate:0.0145},
    meetings: {unit: "$/mtg", rate:100},
    mileage: {unit: "$/mile", rate: 0.625},
    phone: {unit: "$/qtr", rate: 30},
    internet: {unit: "$/qtr", rate: 30},
};
const jobs = {
    supervisor: {rate: 30},
    clerk: {rate: 750},
    deputyclerk: {rate: 150},
    treasurer: {rate: 550},
    deputytreasurer: {rate: 0},
};

export {rates, jobs};