db.customers.insertOne({
  _id: "farrel",
  name: "Moch Farrel",
});

db.products.insertMany([
  {
    _id: 1,
    name: "Indomie Goreng",
    price: new NumberLong("2000"),
  },
  {
    _id: 2,
    name: "Indomie Soto",
    price: new NumberLong("2300"),
  },
]);

db.orders.insertOne({
  _id: new ObjectId(),
  total: new NumberLong("4300"),
  item: [
    {
      product_id: 1,
      price: new NumberLong("2000"),
      quantity: new NumberInt("1"),
    },
    {
      product_id: 2,
      price: new NumberLong("2300"),
      quantity: new NumberInt("1"),
    },
  ],
});

db.customers.find({
  _id: "farrel",
});

db.customers.find({
  name: "Moch Farrel",
});

db.orders.find({
  "item.product_id": 1,
});

db.products.insertMany([
  {
    _id: 3,
    name: "Pop Mie Rasa Bakso",
    price: new NumberLong("2500"),
    category: "food",
  },
  {
    _id: 4,
    name: "Samsung Galaxy S9",
    price: new NumberLong("10000000"),
    category: "handphone",
  },
  {
    _id: 5,
    name: "Acer Predator XXI",
    price: new NumberLong("25000000"),
    category: "laptop",
  },
]);

db.customers.find({
  _id: {
    $eq: "farrel",
  },
});

db.products.find({
  price: {
    $gt: 2300,
  },
});

db.products.find({
  category: {
    $in: ["laptop", "handphone"],
  },
  price: {
    $gt: 10000000,
  },
});

db.products.find({
  $and: [
    {
      category: {
        $in: ["laptop", "handphone"],
      },
    },
    {
      price: {
        $gt: 10000000,
      },
    },
  ],
});

db.products.find({
  category: {
    $not: {
      $in: ["laptop", "handphone"],
    },
  },
});

db.products.find({
  category: {
    $exists: true,
  },
});

db.products.find({
  category: {
    $type: "string",
  },
});

db.products.find({
  price: {
    $type: ["int", "long"],
  },
});

db.customers.insertOne({
  _id: "joko",
  name: "joko",
});

db.customers.find({
  $expr: {
    $eq: ["$_id", "$name"],
  },
});

db.products.find({
  $jsonSchema: {
    required: ["name", "category"],
  },
});

db.products.find({
  $jsonSchema: {
    required: ["name"],
    properties: {
      name: {
        type: "string",
      },
      price: {
        type: "number",
      },
    },
  },
});

db.products.find({
  price: {
    $mod: [1000000, 0],
  },
});

db.products.find({
  name: {
    $regex: /mie/,
    $options: "i",
  },
});

db.products.insertMany([
  {
    _id: 6,
    name: "Logitech Wireless Mouse",
    price: new NumberLong("175000"),
    category: "laptop",
    tags: ["logitech", "mouse", "accessories"],
  },
  {
    _id: 7,
    name: "Cooler Pad Gaming",
    price: new NumberLong("200000"),
    category: "laptop",
    tags: ["cooler", "laptop", "accessories", "fan"],
  },
  {
    _id: 8,
    name: "Samsung Curved Monitor",
    price: new NumberLong("1750000"),
    category: "computer",
    tags: ["samsung", "monitor", "computer"],
  },
]);

db.products.find({
  tags: {
    $all: ["samsung", "monitor"],
  },
});

db.products.find({
  tags: {
    $elemMatch: {
      $in: ["samsung", "logitech"],
    },
  },
});

db.products.find({
  tags: {
    $size: 4,
  },
});

db.products.find(
  {},
  {
    name: 1,
    category: 1,
  }
);

db.products.find(
  {},
  {
    tags: 0,
  }
);

db.products.find(
  {},
  {
    name: 1,
    tags: {
      $elemMatch: {
        $in: ["samsung", "logitech"],
      },
    },
  }
);

db.products.find(
  {
    tags: {
      $exists: true,
    },
  },
  {
    name: 1,
    "tags.$": 1,
  }
);

db.products.find(
  {
    tags: {
      $exists: true,
    },
  },
  {
    name: 1,
    tags: {
      $slice: 2,
    },
  }
);

db.products.find({}).count();

db.products.find({}).limit(4);

db.products.find({}).skip(2).limit(4);

db.products.find({}).sort({
  name: 1,
  category: -1,
});

db.products.updateOne(
  {
    _id: 1,
  },
  {
    $set: {
      category: "food",
    },
  }
);

db.products.updateOne(
  {
    _id: 2,
  },
  {
    $set: {
      category: "food",
    },
  }
);

db.products.updateMany(
  {
    $and: [
      {
        category: {
          $eq: "food",
        },
      },
      {
        tags: {
          $exists: false,
        },
      },
    ],
  },
  {
    $set: {
      tags: ["food"],
    },
  }
);

db.products.insertOne({
  _id: 9,
  name: "Ups salah",
  wrong: "Salah lagi",
});

db.products.replaceOne(
  {
    _id: 9,
  },
  {
    name: "Adidas Sepatu Lari Pria",
    price: new NumberLong("1100000"),
    category: "shoes",
    tags: ["adidas", "shoes", "running"],
  }
);

db.products.updateMany(
  {},
  {
    $set: {
      stock: 0,
    },
  }
);

db.products.updateMany(
  {},
  {
    $inc: {
      stock: 10,
    },
  }
);

db.customers.updateMany(
  {},
  {
    $rename: {
      name: "full_name",
    },
  }
);

db.customers.updateMany(
  {},
  {
    $set: {
      wrong: "Ups",
    },
  }
);

db.customers.updateMany(
  {},
  {
    $unset: {
      wrong: "Ups",
    },
  }
);

db.products.updateMany(
  {},
  {
    $currentDate: {
      lastModifiedDate: {
        $type: "date",
      },
    },
  }
);

db.products.updateMany(
  {},
  {
    $set: {
      ratings: [90, 20, 80],
    },
  }
);

db.products.updateMany(
  {
    ratings: 90,
  },
  {
    $set: {
      "ratings.$": 100,
    },
  }
);

db.products.updateMany(
  {},
  {
    $set: {
      "ratings.$[]": 100,
    },
  }
);

db.products.updateMany(
  {},
  {
    $set: {
      "ratings.$[element]": 100,
    },
  },
  {
    arrayFilters: [
      {
        element: {
          $gte: 80,
        },
      },
    ],
  }
);

db.products.updateMany(
  {},
  {
    $set: {
      "ratings.1": 50,
      "ratings.2": 60,
    },
  }
);

db.products.find({_id: 1});

db.products.updateOne(
  {
    _id: 1,
  },
  {
    $addToSet: {
      tags: "popular",
    },
  }
);

db.products.updateOne(
  {
    _id: 1,
  },
  {
    $pop: {
      ratings: -1,
    },
  }
);

db.products.updateOne(
  {_id: 2},
  {
    $pop: {
      ratings: 1,
    },
  }
);

db.products.updateMany(
  {},
  {
    $set: {
      ratings: [90, 80, 70],
    },
  }
);

db.products.updateMany(
  {},
  {
    $pull: {
      ratings: {
        $gte: 80,
      },
    },
  }
);

db.products.updateMany(
  {},
  {
    $push: {
      ratings: 100,
    },
  }
);

db.products.updateMany(
  {},
  {
    $pullAll: {
      ratings: [100, 0],
    },
  }
);
