export default {
  segments(segment) {
    const query = {};
    const anyOfConditions = segment.connector === 'any';

    if (anyOfConditions && segment.conditions.length) {
      query.$or = [];
    }

    segment.conditions.forEach(({ field, operator, value }) => {
      let op;
      const transformedValue = operator.type === 'string' ? value.toLowerCase() : value;

      switch (operator) {
        case 'e':
        case 'et':
        default:
          op = transformedValue;
          break;
        case 'dne':
          op = { $ne: transformedValue };
          break;
        case 'c':
          op = { $regex: `.*${transformedValue}.*` };
          break;
        case 'dnc':
          op = { $not: `.*${transformedValue}.*` };
          break;
        case 'igt':
          op = { $gt: transformedValue };
          break;
        case 'ilt':
          op = { $lt: transformedValue };
          break;
        case 'it':
          op = true;
          break;
        case 'if':
          op = false;
          break;
        case 'is':
          op = { $exists: true };
          break;
        case 'ins':
          op = { $exists: false };
          break;
      }

      if (anyOfConditions) {
        query.$or.push({ [field]: op });
      } else {
        query[field] = op;
      }
    });

    return query;
  },
};