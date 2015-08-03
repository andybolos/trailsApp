app.service('myService', function() {

    var rides = [
        {
            id: 1,
            rideType: 'Dirtbike',
            options: [
                {
                    id: 11,
                    brand: 'Kawasaki',
                    engine: '450cc'
                },
                {
                    id: 12,
                    brand: 'Yamaha',
                    engine: '450cc'
                },
                {
                    id: 13,
                    brand: 'Suzuki',
                    engine: '450cc'
                },
                {
                    id: 14,
                    brand: 'Honda',
                    engine: '450cc'
                }
            ]
        },
        {
            id: 2,
            rideType: 'Bicycle',
            options: [
                {
                    id: 21,
                    name: 'Mountain Bike',
                    brand: 'Specialized'
                },
                {
                    id: 22,
                    name: 'Fixie',
                    brand: 'Origins-8'
                },
                {
                    id: 23,
                    name: 'BMX bike',
                    brand: 'Fit Bikes'
                }
            ]
        },
        {
            id: 3,
            rideType: 'Skis',
            options: [
                {
                    id: 31,
                    brand: 'Line'
                },
                {
                    id: 32,
                    brand: '4frnt'
                }
            ]
        },
        {
            id: 4,
            rideType: 'Wakeboard',
            options: [
                {
                    id: 41,
                    brand: 'Hyperlite',
                    boots: 'System Bindings'
                },
                {
                    id: 42,
                    brand: 'LiquidForce',
                    boots: 'Watson'
                }
            ]
        }
    ];

    this.rideData = function() {
        return rides;
    }

});
