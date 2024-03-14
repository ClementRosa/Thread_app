import * as z from 'zod';

export const ThreadValidation = z.object({
    thread: z.string().min(3, { message: 'Minimum 3 chracters'}),
    accountId: z.string().min(1)
})

export const CommentValisation = z.object({
    thread: z.string().min(3, { message: 'Minimum 3 chracters'}),
})