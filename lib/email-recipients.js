module.exports = [
    { $project: { 'date': {
        $dateToString: {
            format: '%Y-%m-%d', 
            date: '$headers.Date'
        }
    } } },
    { $unwind: '$headers.To' },
    { $group: {
        _id: '$to',
        count: { $sum: 1 }
    } },
    { $sort: {
        to: -1
    } }
];
