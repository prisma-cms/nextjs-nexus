import { scalarType } from 'nexus'
import { GraphQLError } from 'graphql'
// import * as FileType from "file-type";

export const Upload = scalarType({
  name: 'Upload',
  asNexusMethod: 'upload', // We set this to be used as a method later as `t.upload()` if needed
  description: 'desc',
  // parseValue: async (value) => {
  //   const upload = await value;
  //   const stream = upload.createReadStream();
  //   const fileType = await FileType.fromStream(stream);

  //   console.log('fileType', fileType);
  //   console.log('upload', upload);

  //   if (fileType?.mime !== upload.mimetype)
  //     throw new GraphQLError("Mime type does not match file content.");

  //   return upload;
  // },
  parseValue(value) {
    // const upload = await value;
    // const stream = upload.createReadStream();
    // const fileType = await FileType.fromStream(stream);

    // console.log('fileType', fileType);
    // console.log('upload', upload);

    // if (fileType?.mime !== upload.mimetype)
    //   throw new GraphQLError("Mime type does not match file content.");

    return value
  },
  serialize: () => {
    throw new GraphQLError('Upload serialization unsupported.')
  },
  parseLiteral: (ast) => {
    throw new GraphQLError('Upload literal unsupported.', ast)
  },
})
