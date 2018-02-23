const commonFields = `
  $name: String,
  $contentType: String,
  $order: Int,
  $description: String,
  $visible: Boolean,
  $lastUpdatedBy: String,
`;

const commonTypes = `
  name: $name,
  contentType: $contentType,
  order: $order,
  description: $description,
  visible: $visible,
  lastUpdatedBy: $lastUpdatedBy,
`;

const fieldsGroupsAdd = `
  mutation fieldsGroupsAdd(${commonFields}) {
    fieldsGroupsAdd(${commonTypes}) {
      _id
    }
  }
`;

const fieldsGroupsEdit = `
  mutation fieldsGroupsEdit($_id: String!, ${commonFields}) {
    fieldsGroupsEdit(_id: $_id, ${commonTypes}) {
      _id
    }
  }
`;

const fieldsGroupsRemove = `
  mutation fieldsGroupsRemove($_id: String!) {
    fieldsGroupsRemove(_id: $_id)
  }
`;

const fieldsGroupsUpdateVisible = `
  mutation fieldsGroupsUpdateVisible($_id: String!, $visible: Boolean, $lastUpdatedBy: String) {
    fieldsGroupsUpdateVisible(_id: $_id, visible: $visible, lastUpdatedBy: $lastUpdatedBy) {
      _id
    }
  }
`;

const commonVariables = `
  $type: String,
  $validation: String,
  $text: String,
  $description: String,
  $options: [String],
  $isRequired: Boolean,
  $order: Int,
  $groupId: String,
  $visible: Boolean,
  $lastUpdatedBy: String
`;

const commonParams = `
  type: $type,
  validation: $validation,
  text: $text,
  description: $description,
  options: $options,
  isRequired: $isRequired,
  order: $order,
  groupId: $groupId,
  visible: $visible,
  lastUpdatedBy: $lastUpdatedBy
`;

const fieldsAdd = `
  mutation fieldsAdd(
    $contentType: String!,
    $contentTypeId: String,
    ${commonVariables}
  ) {
      fieldsAdd(
        contentType: $contentType,
        contentTypeId: $contentTypeId,
        ${commonParams}
      ) {
        _id
      }
  }
`;

const fieldsEdit = `
  mutation fieldsEdit($_id: String!, ${commonVariables}) {
    fieldsEdit(_id: $_id, ${commonParams}) {
      _id
    }
  }
`;

const fieldsRemove = `
  mutation fieldsRemove($_id: String!) {
    fieldsRemove(_id: $_id) {
      _id
    }
  }
`;

const fieldsUpdateVisible = `
  mutation fieldsUpdateVisible($_id: String!, $visible: Boolean, $lastUpdatedBy: String) {
    fieldsUpdateVisible(_id: $_id, visible: $visible, lastUpdatedBy: $lastUpdatedBy) {
      _id
    }
  }
`;

export default {
  fieldsGroupsAdd,
  fieldsGroupsEdit,
  fieldsGroupsRemove,
  fieldsGroupsUpdateVisible,
  fieldsAdd,
  fieldsEdit,
  fieldsRemove,
  fieldsUpdateVisible
};